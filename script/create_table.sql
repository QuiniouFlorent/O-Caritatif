BEGIN;

CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "lastname" TEXT,
    "firstname" TEXT,
    "email" TEXT,
    "password" TEXT,
    "role" TEXT,
    "photo_url" TEXT,
    "created_at" TIMESTAMPTZ,
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "news" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "category" TEXT,
    "title" TEXT,
    "photo_url" TEXT,
    "summary" TEXT,
    "content" TEXT,
    "author" INT REFERENCES user(id) ,
    "created_at" TIMESTAMPTZ,
    "updated_at" TIMESTAMPTZ
);

COMMIT;