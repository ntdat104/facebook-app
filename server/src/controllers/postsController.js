// models
const Post = require('../models/postModel');
const User = require('../models/userModel');

const postsController = {};

postsController.getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: 'desc' })
      .populate('user', ['username', 'avatar']);

    res.json({ success: true, posts });
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

postsController.createPost = async (req, res) => {
  const { content, attachment } = req.body;

  if (!content) {
    return res
      .status(404)
      .json({ success: false, message: 'Content is required' });
  }

  try {
    const user = await User.findById(req.userId).select('-password');

    const post = new Post({
      content,
      attachment,
      user,
    });

    // Save to db
    await post.save();

    res.json({
      success: true,
      message: 'New post has been created successfully',
      post,
    });
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

postsController.updatePost = async (req, res) => {
  const { content, likeCount, attachments } = req.body;

  if (!content) {
    return res
      .status(404)
      .json({ success: false, message: 'Content is required' });
  }

  try {
    let updatedPost = {
      content,
      likeCount,
      attachments,
    };

    const updateCondition = { _id: req.params.id, user: req.userId };

    updatedPost = await Post.findOneAndUpdate(updateCondition, updatedPost, {
      new: true,
    });

    // User are not authorized to update post or post not found
    if (!updatedPost) {
      return res.status(401).json({
        success: false,
        message: 'Post not found or user is not authorized',
      });
    }

    res.json({ success: true, message: 'Post is updated!', updatedPost });
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

postsController.deletePost = async (req, res) => {
  try {
    const deleteCondition = { _id: req.params.id, user: req.userId };
    const deletedPost = await Post.findOneAndDelete(deleteCondition);

    // User are not authorized to update post or post not found
    if (!deletedPost) {
      return res.status(401).json({
        success: false,
        message: 'Post not found or user is not authorized',
      });
    }

    res.json({ success: true, message: 'Post is deleted!', deletedPost });
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

module.exports = postsController;
