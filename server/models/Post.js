const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    postText: {
      type: String,
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Post = model("Post", postSchema);

module.exports = Post;
