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
    description TEXT NOT NULL,
    category TEXT NOT NULL,
    galery_date TIMESTAMPTZ NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ
);

CREATE TABLE photo (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    galery_id INT NOT NULL REFERENCES galery(id),
    photo_url TEXT NOT NULL,
    content TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ
); 

CREATE TABLE sponsor (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    link_url TEXT NOT NULL,
    photo_url TEXT NOT NULL,
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

CREATE TABLE comment (
    user_id INT REFERENCES "user"(id),
    news_id INT REFERENCES news(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ
);

CREATE TABLE registration (
    user_id INT REFERENCES "user"(id),
    event_id INT REFERENCES event(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ
);

CREATE VIEW view_all_events AS
    SELECT e.title, e.category, e.photo_url, e.description, e.date, e.calendar_url, e.place, u.lastname, u.firstname
    FROM event e
    JOIN "user" u
    ON u.id = e.author;

CREATE VIEW view_all_news AS
    SELECT n.title, n.category, n.photo_url, n.summary, u.lastname, u.firstname, COUNT(c.news_id) AS nombre_commentaires
    FROM news n
    JOIN "user" u
    ON u.id = n.author
    LEFT JOIN comment c
    ON n.id = c.news_id
	GROUP BY n.title, n.category, n.photo_url, n.summary, u.lastname, u.firstname;

CREATE VIEW view_one_news AS
SELECT n.id,
        n.title, 
        n.category, 
        n.photo_url, 
        n.content, 
        u.lastname AS nom_auteur_news, 
        u.firstname AS prenom_auteur_news, 
        c.content AS commentaire, 
        uc.lastname AS nom_auteur_commentaire, 
        uc.firstname AS prenom_auteur_commentaire
    FROM news n
    JOIN "user" u ON u.id = n.author
    LEFT JOIN comment c ON n.id = c.news_id
    LEFT JOIN "user" uc ON uc.id = c.user_id
    GROUP BY n.id, n.title, n.category, n.photo_url, n.content, u.lastname, u.firstname, c.content, uc.lastname, uc.firstname;

COMMIT;