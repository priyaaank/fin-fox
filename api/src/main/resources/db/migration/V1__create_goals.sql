CREATE TABLE IF NOT EXISTS goals (
    id INT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    target_amount DECIMAL NOT NULL,
    current_amount DECIMAL NOT NULL
);