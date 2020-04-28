const connection = require("./../../config/connection");
const replyQueries = require("./../../models/reply");
module.exports = {
    getReply: (req, res) => {
        connection.query(replyQueries.getReply, (err, reply) => {
            if (err) {
                throw err;
            }
            return res.json(reply);
        });
    },
    insertReply: (req,res) => {
        const {reply, comment_id} = req.body;
        console.log(req.body)
        connection.query(replyQueries.insertReply,[ reply, comment_id], (err, dbres) => {
            if (err) {
                throw err;
            }
            connection.query(replyQueries.getReply, (err, reply) => {
                if (err) {
                    throw err;
                }
                return res.json(reply);
            });
        });
    }
};