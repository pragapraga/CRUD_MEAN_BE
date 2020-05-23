const mongoose = require('mongoose'); 

/*mongoose.connect('mongodb://localhost:27017/CRUD',{useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
    if(err){
        console.log('Error in DB connection' + err);
    }
    else{
        console.log('Mongo DB connected Successfully');
    }
});*/
mongoose.connect('mongodb://localhost:27017/CRUD',{useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Mongo DB connected Successfully');

});
module.exports = mongoose;