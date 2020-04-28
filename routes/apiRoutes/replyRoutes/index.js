const router = require("express").Router();
const replyController = require("./../../../controllers/replyController");

router
.route("/")
.get(replyController.getReply)
.post(replyController.insertReply);

module.exports = router;