const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/inspiration");
mongoose.Promise = global.Promise;

module.exports = mongoose;
