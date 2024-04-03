BEGIN;

CREATE TYPE ROLE AS ENUM ('administrateur', 'responsable', 'utilisateur');
--CREATE DOMAIN mail AS TEXT CHECK(VALUE);
--CREATE DOMAIN url AS TEXT CHECK(VALUE);

CREATE TABLE "user" (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    lastname TEXT NOT NULL,
    firstname TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    role ROLE ,
    photo_url TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ
);

CREATE TABLE news (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    category TEXT NOT NULL,
    title TEXT NOT NULL,
    photo_url TEXT,
    summary TEXT NOT NULL,
    content TEXT NOT NULL,
    author INT REFERENCES "user"(id),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ
);

CREATE TABLE event (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    category TEXT NOT NULL,
    title TEXT NOT NULL,
    photo_url TEXT,
    description TEXT NOT NULL,
    date TIMESTAMPTZ NOT NULL,
    calendar_url TEXT NOT NULL,
    place TEXT NOT NULL,
    author INT REFERENCES "user"(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ
);

CREATE TABLE galery (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    category TEXT NOT NULL,
    galery_date TIMESTAMPTZ NOT NULL,
    is_active BOOLEAN DEFAULT true, 
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ
);

CREATE TABLE photo (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    galery_id INT REFERENCES galery(id) ON DELETE CASCADE,
    photo_url TEXT NOT NULL,
    content TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ
); 

CREATE TABLE sponsor (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    link_url TEXT,
    photo_url TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ
);

CREATE TABLE item (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT,
    quantity INT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ
);

CREATE TABLE opinion (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    firstname TEXT NOT NULL,
    content TEXT NOT NULL,
    number_star INT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ
);

CREATE TABLE comment (
    user_id INT REFERENCES "user"(id),
    news_id INT REFERENCES news(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ
);

CREATE TABLE registration (
    user_id INT REFERENCES "user"(id),
    event_id INT REFERENCES event(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ
);

CREATE TABLE homedata (
    name_asso
    image_header_url
    image_header_content
    about_home_title
    about_home_image
    about_home_content
);

CREATE TABLE aboutdata (
    about_header_title
    about_header_image
    about_header_content
);

CREATE VIEW view_all_events AS
    SELECT e.id, e.title, e.category, e.photo_url, e.description, e.date, e.calendar_url, e.place, u.lastname, u.firstname
    FROM event e
    JOIN "user" u
    ON u.id = e.author
    ORDER BY e.date;

CREATE VIEW view_all_news AS
    SELECT n.id,
        n.title,
        n.category,
        n.photo_url,
        n.summary,
        n.is_active,
        n.created_at,
        u.lastname,
        u.firstname,
        count(c.news_id) AS nombre_commentaires
    FROM news n
    JOIN "user" u ON u.id = n.author
    LEFT JOIN comment c ON n.id = c.news_id
    GROUP BY n.id, n.title, n.category, n.photo_url, n.summary, u.lastname, u.firstname
    ORDER BY n.created_at DESC;

CREATE VIEW view_one_news AS
    SELECT n.id,
    n.title,
    n.category,
    n.summary,
    n.photo_url,
    n.content,
    n.is_active,
    u.lastname AS nom_auteur_news,
    u.firstname AS prenom_auteur_news,
        CASE
            WHEN count(c.content) > 0 THEN array_agg(json_build_object('commentaire', c.content, 'date_commentaire', c.created_at, 'date_modification', c.updated_at, 'nom_auteur_commentaire', uc.lastname, 'prenom_auteur_commentaire', uc.firstname, 'user_id', uc.id) ORDER BY c.created_at)
            ELSE '{}'::json[]
        END AS commentaires
    FROM news n
    JOIN "user" u ON u.id = n.author
    LEFT JOIN comment c ON n.id = c.news_id
    LEFT JOIN "user" uc ON uc.id = c.user_id
    GROUP BY n.id, n.title, n.category, n.photo_url, n.content, u.lastname, u.firstname;

CREATE VIEW view_one_galery AS
    SELECT p.id, p.galery_id, p.photo_url, p.content, g.title, g.description, g.category, g.galery_date
    FROM photo p
    JOIN galery g ON p.galery_id = g.id;

CREATE VIEW view_last_galery AS
    SELECT g.id, g.title, g.category, g.galery_date, g.description, ARRAY_AGG(p.photo_url) AS photos
    FROM galery g
    JOIN photo p ON p.galery_id = g.id
	GROUP BY g.id
    ORDER BY g.galery_date DESC
    LIMIT 1;

CREATE VIEW view_last_news AS
    SELECT n.id, 
        n.title, 
        n.category, 
        n.photo_url, 
        n.summary,
        n.created_at,
        u.lastname,
        u.firstname,
        count(c.news_id) AS nombre_commentaires
    FROM news n
    JOIN "user" u ON u.id = n.author
    LEFT JOIN comment c ON n.id = c.news_id
    GROUP BY n.id, n.title, n.category, n.photo_url, n.summary, u.lastname, u.firstname
    ORDER BY n.created_at DESC 
    LIMIT 4;

CREATE VIEW view_next_event AS
    SELECT * 
    FROM event
    WHERE date >= CURRENT_DATE
    ORDER BY date LIMIT 3;

COMMIT;
