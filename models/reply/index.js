const insertReply = "INSERT INTO replyTb (reply, comment_id) VALUES (?,?);";
const getReply = "SELECT * FROM replyTb;";
module.exports = {
    insertReply,
    getReply
};