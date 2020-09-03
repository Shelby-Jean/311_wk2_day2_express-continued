const express = require('express');
const commentController = require('../controllers/comments');
const router = express.Router();

//get all comments
router.get('/comments', commentController.listComments);

//get one comment with id
router.get('/comments/:id', commentController.showComment);

//post comment
router.post('/comments', commentController.createComment);


module.exports = router;