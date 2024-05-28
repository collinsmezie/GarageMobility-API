const express = require('express');
const postsRouter = express.Router();
const postController = require('../controllers/postController');


postsRouter.get('/posts/all', postController.getAllPosts);
postsRouter.get('/posts/:postId/one', postController.getPostById);
postsRouter.post('/posts/create', postController.createPost);
postsRouter.put('/posts/:postId/update', postController.updatePost);
postsRouter.delete('/posts/:postId/delete', postController.deletePost);




module.exports = postsRouter;