
const router = require('express').Router();

const commentControllers = require('./../../../controllers/commentController');

router.route('/')
.get(commentControllers.getComments)
.post(commentControllers.insertComments);

module.exports = router;