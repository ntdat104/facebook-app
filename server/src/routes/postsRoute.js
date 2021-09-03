const express = require('express');

const verifyToken = require('../middlewares/authMiddleware');
const postsController = require('../controllers/postsController');

const router = express.Router();

// @route GET api/posts
// @desc Get posts
// @access Private
router.get('/', verifyToken, postsController.handleGetPosts);

// @route POST api/posts
// @desc Create new post
// @access Private
router.post('/', verifyToken, postsController.handleCreatePost);

// @route PUT api/posts/:id
// @desc Update post
// @access Private
router.put('/:id', verifyToken, postsController.handleUpdatePost);

// @route DELETE api/posts/:id
// @desc Delete post
// @access Private
router.delete('/:id', verifyToken, postsController.handleDeletePost);

module.exports = router;
