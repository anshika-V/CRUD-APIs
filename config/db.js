const mongoose = require('mongoose');

const mongoUrl = "mongodb://localhost/crud";
mongoose.connect(mongoUrl ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function(err,res){
    if(err){
        console.log("error");
    }
    else{
        
        console.log("Connected to database");
    }
});

module.exports = mongoose.connection;