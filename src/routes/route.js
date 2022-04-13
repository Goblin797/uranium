const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

const BookModel = require("../models/bookModel")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)
//cccccc
router.post("/createBook", BookController.createBook )

router.get("/bookList", async function (req, res) {
    let allBooks= await BookModel.find().select({bookName : 1,authorName : 1})
    res.send({msg: allBooks})
})

router.post("/getBooksInYear",async function(req , res) {
    let year = req.body.year
    let bookyear = await BookModel.find({   year: {$eq : year}  })
    res.send({msg: bookyear})
})

router.post("/getParticularBooks",async function(req,res) {
   
    const cond = req.body
     const books = await BookModel.find(
        cond
     )
    res.send({msg:books})
    
})


router.get("/getXINRBooks", async function(req , res) {
    let bookprice = await BookModel.find
    ({
          "prices.indianPrice" :
             { 
               $in: ["100INR","200INR","500INR"]   
             }
              
    })
    res.send({msg: bookprice})
})



router.get("/getRandomBook", async function(req,res) {
    let books = await BookModel.find({    
        $or:[  {stockAvailable:true} , { totalPages: {$gt:500} }  ]  
     })
    res.send({msg:books})
})

module.exports = router;

