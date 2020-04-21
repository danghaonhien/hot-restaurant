CREATE TABLE commentTb (
    id INT AUTO_INCREMENT NOT NULL,
    comments VARCHAR(500) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE replyTb (
    reply VARCHAR NOT NULL,
    comment_id INT NOT NULL
)
