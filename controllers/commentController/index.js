const connection = require("./../../config/connection");
const commentQueries = require("./../../models/comments");
module.exports = {
  getComments: (req, res) => {
    connection.query(commentQueries.getComments, (err, comments) => {
      if (err) {
        throw err;
      }
      return res.json(comments);
    });
  },
  insertComments: (req, res) => {
    const { comments } = req.body;
    connection.query(commentQueries.insertComments, comments, (err, dbRes) => {
      if (err) {
        throw err;
      }
      connection.query(commentQueries.getComments, (err, comments) => {
        if (err) {
          throw err;
        }
        return res.json(comments);
      });
    });
  }
};
