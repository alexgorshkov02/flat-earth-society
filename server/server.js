const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const db = require("./config/connection");

async function startApolloServer(typeDefs, resolvers, authMiddleware) {
  const PORT = process.env.PORT || 3001;
  const server = new ApolloServer({ typeDefs, resolvers, authMiddleware });
  const app = express();
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
  }

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
}

startApolloServer(typeDefs, resolvers, authMiddleware);
