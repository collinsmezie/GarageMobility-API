const express = require('express');
const postsRouter = express.Router();
const postController = require('../controllers/postController');


postsRouter.get('/posts/all', postController.getAllPosts);
postsRouter.get('/posts/:id/one', postController.getPostById);
postsRouter.post('/posts/create', postController.createPost);
postsRouter.put('/posts/:id/update', postController.updatePost);
postsRouter.delete('/posts/:id/delete', postController.deletePost);




module.exports = postsRouter;