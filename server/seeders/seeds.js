const faker = require("faker");

const db = require("../config/connection");
const { Post } = require("../models");

db.once("open", async () => {
  await Post.deleteMany({});

  // create post
  for (let i = 0; i < 5; i += 1) {
    const postText = faker.lorem.words(Math.round(Math.random() * 20) + 1);
    await Post.create({ postText: postText });
  }

  console.log("all done!");
  process.exit(0);
});
