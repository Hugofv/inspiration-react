const { buildSchema } = require("graphql");

module.exports = buildSchema(`
  type Book {
    _id: ID!
    name: String!
    editor: String
    category: String
    released: String
    city: String
    author: [Author!]!
  }

  type Author {
    _id: ID!
    name: String
    birthday: String
    gender: String
    country: String
    description: String
  }

  input BookInput {
    name: String!
    editor: String
    category: String
    released: String
    city: String
    author: ID
  }

  input AuthorInput {
    name: String
    birthday: String
    gender: String
    country: String
    description: String
  }

  type RootQuery {
    Books: [Book!]!
    Authors: [Author!]!
  }

  type RootMutation {
    createBook(BookInput: BookInput): Book
    createAuthor(AuthorInput: AuthorInput): Author
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
