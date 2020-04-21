CREATE TABLE commentTb (
    id INT AUTO_INCREMENT NOT NULL,
    comments VARCHAR(500) NOT NULL,
    PRIMARY KEY (id)
);
INSERT INTO commentTb (comments)
VALUES ("The food here is very good"),
("The service is also very good");