const insertComments = "INSERT INTO commentTb (comments) VALUES (?);";
const getComments = "SELECT * FROM commentTb;";

module.exports = {
    insertComments,
    getComments
};