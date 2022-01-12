var express = require("express");
var bodyParser = require("body-parser");
const bookRoutes = require('./routes/bookRoutes');
const conn = require('./config/db');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

conn.once('open', (err) => {
    if(err){
        console.log(err);
    }
    else {
        console.log("Database is running");
    }
})
//ROUTES
app.use('/api/book/', bookRoutes)


app.listen(8080,function(){
    console.log("Running at localhost:8080");
})