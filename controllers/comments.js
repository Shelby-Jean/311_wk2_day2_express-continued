const comments = require('../data/comments');

//get all comments
const listComments = (req, res) => {
  return res.json(comments);
}

//get one comment with id
const showComment = (req, res) => {
  let find = comments.find(comment => comment._id === parseInt(req.params.id));
  return res.json(find);
}

//post comment
const createComment = () => {
  app.post('/comments', (req, res) => {
  let counter = comments.length + 1;
  let newComment = req.body;
  newComment._id = counter;
  newComment.postId = 1;
  comments.push(newComment);
  return res.json(comments);
});
}

module.exports = { listComments, showComment, createComment }