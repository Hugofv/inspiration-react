const mongoose = require("../database");

const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  birthday: {
    type: Date
  },
  gender: {
    type: String
  },
  country: {
    type: String
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model("Author", authorSchema);
