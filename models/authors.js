const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    id: String,
    first_name: String,
    last_name: String
});

const Author = mongoose.model("authors", authorSchema, "authors");
module.exports = Author;