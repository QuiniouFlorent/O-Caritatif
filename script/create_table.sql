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

CREATE TABLE opinion (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    firstname TEXT NOT NULL,
    content TEXT NOT NULL,
    number_star INT NOT NULL,
    is_active BOOLEAN,
    position INT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ
);

CREATE TABLE comment (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INT REFERENCES "user"(id),
    news_id INT REFERENCES news(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ
);

CREATE TABLE registration (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INT REFERENCES "user"(id),
    event_id INT REFERENCES event(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ
);

CREATE TABLE notification (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INT REFERENCES "user"(id),
    message TEXT,
    is_read BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ
);

CREATE TABLE setting (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    association_name TEXT NOT NULL,
    association_logo_url TEXT,
    primary_color TEXT,
    adress TEXT,
    number_phone TEXT,
    first_media_link TEXT,
    second_media_link TEXT,
    email_asso TEXT,
    email_password TEXT,
    boutique_is_active BOOLEAN DEFAULT true,
    galery_is_active BOOLEAN DEFAULT true,
    event_is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ
);

ALTER TABLE setting 
    ADD CONSTRAINT limite_line CHECK ( id = 1 );

CREATE TABLE boardmember (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    firstname TEXT,
    lastname TEXT,
    role TEXT,
    description TEXT,
    photo_url TEXT,
    since TIMESTAMPTZ,
    position INT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ
);

CREATE TABLE aboutdata (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title TEXT,
    content TEXT,
    photo_url TEXT,
    position INT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ
);

CREATE TABLE photohome (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    content TEXT,
    photo_url TEXT,
    align TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ
);

CREATE TABLE photoabout (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    photo_url TEXT,
    position INT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ
);

CREATE TABLE item (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT,
    description TEXT,
    category TEXT,
    type TEXT,
    quantity_available INT,
    photo_url TEXT,
    is_active BOOLEAN default true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ
);

CREATE TABLE itemreservation (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    article_id INT REFERENCES item(id),
    user_id INT REFERENCES "user"(id),
    quantity INT,
    return_date TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ
);

CREATE TABLE resetpassword (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_email TEXT REFERENCES "user"(email),
    token TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ
);

CREATE VIEW view_all_events AS
    SELECT e.id, e.title, e.category, e.photo_url, e.description, e.date, e.calendar_url, e.place, u.lastname, u.firstname, count(r.user_id) AS nombre_inscrit
    FROM event e
    JOIN "user" u
    ON u.id = e.author
	LEFT JOIN registration r ON e.id = r.event_id
	GROUP BY e.id, u.lastname, u.firstname
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
        COUNT(c.news_id) FILTER (WHERE c.is_active = true) AS nombre_commentaires
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
            WHEN count(c.content) > 0 THEN ARRAY_AGG(json_build_object('id', c.id, 'commentaire', c.content, 'date_commentaire', c.created_at, 'is_active', c.is_active, 'date_modification', c.updated_at, 'nom_auteur_commentaire', uc.lastname, 'prenom_auteur_commentaire', uc.firstname, 'user_id', uc.id) ORDER BY c.created_at)
            ELSE '{}'::json[]
        END AS commentaires
    FROM news n
    JOIN "user" u ON u.id = n.author
    LEFT JOIN comment c ON n.id = c.news_id
    LEFT JOIN "user" uc ON uc.id = c.user_id
    GROUP BY n.id, n.title, n.category, n.photo_url, n.content, u.lastname, u.firstname;

CREATE VIEW view_all_galery AS
    SELECT g.id, g.title, g.description, g.category, g.galery_date, g.is_active, ARRAY_AGG(json_build_object('id', p.id, 'photo_url', p.photo_url, 'content', p.content) ORDER BY p.id) AS photos
    FROM galery g
    LEFT JOIN photo p ON g.id = p.galery_id
	GROUP BY g.id;

CREATE VIEW view_one_galery AS
    SELECT g.id, g.title, g.description, g.category, g.galery_date, ARRAY_AGG(json_build_object('id', p.id, 'photo_url', p.photo_url, 'content', p.content) ORDER BY p.id) AS photos
    FROM galery g
    JOIN photo p ON g.id = p.galery_id
	GROUP BY g.id;
    
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
    SELECT e.id, e.category, 
        e.title, e.photo_url, 
        e.description, e.date, 
        e.calendar_url, e.place,
        u.lastname, u.firstname,
        count(r.user_id) AS nombre_inscrit
    FROM event e 
    JOIN "user" u ON u.id = e.author
    LEFT JOIN registration r ON e.id = r.event_id
    WHERE e.date >= CURRENT_DATE
	GROUP BY e.id, u.lastname, u.firstname
    ORDER BY date LIMIT 3;

CREATE VIEW view_registration AS
    SELECT r.id, r.user_id, r.event_id, e.title, e.date, e.place
    FROM registration r
    JOIN event e ON r.event_id = e.id;

COMMIT;
