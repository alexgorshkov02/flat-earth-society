const faker = require("faker");
const mongoose = require('mongoose')

const db = require("../config/connection");
const { Post } = require("../models");

db.once("open", async () => {
  await Post.deleteMany({});

  // create post
  for (let i = 0; i < 10; i += 1) {
    const postText = faker.lorem.words(Math.round(Math.random() * 20) + 1);
    const user_id = mongoose.Types.ObjectId();
    await Post.create({ user_id: user_id, postText: postText });
  }

  console.log("all done!");
  process.exit(0);
});
