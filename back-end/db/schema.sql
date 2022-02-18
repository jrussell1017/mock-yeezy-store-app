DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    description TEXT,
    featured BOOLEAN,
    image TEXT,
    price INT
    CHECK (price >= 0),
    rating INT DEFAULT 0
    CHECK (rating >= 0 AND rating <= 5)
);
