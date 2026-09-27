const mongoose = require('mongoose');

var schema=mongoose.Schema({
    Name:String,
    Disc:String,
    price:Number,
    image:String
})
var productmodel=mongoose.model("product2",schema)
module.exports=productmodel
