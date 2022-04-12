const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    bookName : String,
    authorName : String,
    category :{
        type : String,
        enum : ["anime","science","comedy","fact"]},
    year : Number
},{timeStamps : true})

module.exports = mongoose.model('Book', bookSchema)