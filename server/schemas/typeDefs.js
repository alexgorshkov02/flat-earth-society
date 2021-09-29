const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    posts: [Post]
    comments: [Comment]
  }

type Post {
  _id: ID
  postText: String
  user_id: ID
  createdAt: String
  username: String
  commentCount: Int
  comments: [Comment]
}

type Auth {
  token: ID!
  user: User
}

type Comment {
    _id: ID
    commentText: String
    createdAt: String
    username: String
}


type Query {
    me: User
    posts(username: String): [Post]
    post(_id: ID!): Post
  }

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  addPost(user_id: ID!, postText: String!): Post
  addComment(postId: ID!, commentText: String!): Post
}
`;

module.exports = typeDefs;
