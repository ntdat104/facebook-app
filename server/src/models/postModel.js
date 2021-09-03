const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    content: {
      type: String,
      required: true,
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    attachments: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);
