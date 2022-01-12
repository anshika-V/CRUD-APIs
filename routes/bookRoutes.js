const express = require('express');
var mongoose = require("mongoose");
var Book = require("../models/book");
const bookController = require("../controller/bookController");
const app = express();

app.use('/', bookController);

module.exports = app;