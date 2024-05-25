CREATE TABLE tasks(
    id SERIAL PRIMARY KEY,
    user_id uuid,
    description VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES "users" (id)
);
