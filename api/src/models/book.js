const mongoose = require("../database");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  editor: {
    type: String
  },
  category: {
    type: String
  },
  released: {
    type: Date
  },
  city: {
    type: String
  },
  author: [
    {
      type: Schema.Types.ObjectId,
      ref: "Author"
    }
  ]
});

module.exports = mongoose.model("Book", bookSchema);
