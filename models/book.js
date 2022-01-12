var mongoose = require("mongoose");

var bookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    author: { type: String, required: true },
    rowNumber: { type: Number, max: 10 },
    colNumber: { type: Number, max: 10 },
    shelfNumber: { type: Number, max: 20 },
    available: { type : Boolean, required : true, default: true },
    updatedTime: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Book", bookSchema);