const express = require("express");
const bodyParser = require("body-parser");
const graphHttp = require("express-graphql");

const graphQlSchema = require("./src/graphql/schema/index");
const graphQlResolver = require("./src/graphql/resolvers/index");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});
app.use(
  "/graphql",
  graphHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolver,
    graphiql: true
  })
);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
