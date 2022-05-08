CREATE DATABASE mastermind;
USER mastermind;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(20) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL,
  email VARCHAR(50) NOT NULL,
  PRIMARY KEY (id),
  INDEX (username)
);

INSERT INTO users (username, password, email)
VALUES
('Test', '1234', 'testuser1@test.com'),

