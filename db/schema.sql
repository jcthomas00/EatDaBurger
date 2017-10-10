CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;
CREATE TABLE IF NOT EXISTS burgers (
	id INT not null auto_increment, 
    burger_name VARCHAR(60),
	devoured BOOLEAN,
	date TIMESTAMP,
    PRIMARY KEY(id)
);
