const express = require('express');

const router = express.Router();
const postController = require('../controllers/postController');

router.get('/', (request, response) => {
  response.status(200).json({
    message: 'Greetings',
  });
});

router.get('/posts', postController.getPosts);
router.get('/posts/:postId', postController.getPostById);
router.post('/posts', postController.createPost);
router.delete('/posts/:postId', postController.deletePostById);
router.put('/posts/:postId', postController.updatePostById);

module.exports = router;
