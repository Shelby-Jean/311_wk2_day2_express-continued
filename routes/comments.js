const express = require('express');
const comments = require('../data/comments');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

//get all comments
router.get('/comments', (req, res) => {
  res.json(comments);
});

//get one comment with id
router.get('/comments/:id', (req, res) => {
  let find = comments.find(comment => comment._id === parseInt(req.params.id));
  res.json(find);
});

//post comment
router.post('/comments', (req, res) => {
  let counter = comments.length + 1;
  let newComment = req.body;
  newComment._id = counter;
  newComment.postId = 1;
  comments.push(newComment);
  res.json(comments);
});


module.exports = router;