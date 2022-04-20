const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:String,
    category:{
        type:String,
        enum:["book","earphone","phone","clothing"]
    },
    price:{
        type:Number,
        required:true
    }

},{timestamps:true})

module.exports = mongoose.model('Product',productSchema)