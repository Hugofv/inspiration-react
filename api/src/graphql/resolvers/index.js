const Book = require("./../../models/book");
const Author = require("./../../models/author");

module.exports = {
  Books: () => {
    return Book.find({})
      .populate("author")
      .then(data => {
        return data.map(e => {
          return { ...e._doc, released: e.released.toLocaleString("pt-BR") };
        });
      })
      .catch(err => {
        throw err;
      });
  },
  createBook: args => {
    return Book.create(args.BookInput)
      .then(result => {
        return { ...result._doc };
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },
  Authors: () => {
    return Author.find({})
      .then(data => {
        return data.map(e => {
          return { ...e._doc };
        });
      })
      .catch(err => {
        throw err;
      });
  },
  createAuthor: args => {
    return Author.create(args.AuthorInput)
      .then(result => {
        return { ...result._doc };
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }
};
