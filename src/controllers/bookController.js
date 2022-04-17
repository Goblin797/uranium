const { format } = require("express/lib/response")
const AuthorModel = require("../models/authorModel")
const BookModel= require("../models/bookModel")
const PublisherModel = require("../models/publisherModel")
const { put } = require("../routes/route")

//creation of models
//problem 1
const createAuthor = async (req,res)=>{
    let author  = req.body
    if(author.author_name){
         let authorCreated = await AuthorModel.create(author)   //author model
         res.send({msg:authorCreated})
        }
    else{
        res.send("author name is not given")
    }
}
//problem 2
const createPublisher = async (req,res)=>{
    let publisher  = req.body
    if(publisher.name){
         let publisherCreated = await PublisherModel.create(publisher)   //publisher model
         res.send({msg:publisherCreated})
        }
    else{
        res.send(" publisher name is not given")
    }

}

//problem 3
const createBook= async function (req, res) {
    let book = req.body//body mai jo likha tha ismai save kar diya hai
    if(book.author)//check if author id is given by user
    {
        if(book.publisher)
        {
            let temp1 = await AuthorModel.findById(book.author)//find id in author model by comparing with id given in body 
            if(temp1)//if temp1 has data 
            {
                let temp2= await PublisherModel.findById(book.publisher)
                if(temp2)
                {
                    let bookCreated = await BookModel.create(book)
                    res.send({data: bookCreated})
                }
                else res.send("publisher-id invalid")

            }
            else res.send("author-id invalid")
              
        }
        else res.send("publisher id not given")
    }
    else res.send("author id is not given")
}





//problem 4
const getBooks = async function (req, res) {
    let Book = await BookModel.find().populate('author').populate("publisher")
    res.send({data: Book})
    console.log(Book[0].author.age)

}
//problem 5a
const bookupdate = async (req,res)=>{

    const bodyname = req.body.name   

    let data = await PublisherModel.find(
        {name: {$in :bodyname  }}  
    ).select({_id:1})  

    let book = await BookModel.updateMany(
        { publisher:  {$in: data  }  },  
        {$set:{isHardCover :true}}
    )
    res.send({msg:data})


    
   
    
}
//problem 5b
const updatedata = async (req,res)=>{
    const authorAge = req.params.age//the age is given by user through url  ex: /books/80 so authorAge=80

    let data = await AuthorModel.find({age: {$gt : authorAge}}).select({_id:1}) 
    //according to age given by user, find the author id which has age greater than author age
    
    await BookModel.updateMany(
        {author: {$in : data} },//update the data in book model 
        {$inc:{price:1000}}
    )
    res.send({msg:data})
}

module.exports.createBook= createBook
//module.exports.getBooksData= getBooksData
module.exports.getBooks = getBooks

module.exports.createAuthor=createAuthor
module.exports.createPublisher=createPublisher

module.exports.bookupdate=bookupdate
module.exports.updatedata=updatedata
