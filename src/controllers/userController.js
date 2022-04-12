const UserModel= require("../models/userModel")
const BookModel = require("../models/bookModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

//book router

const createBook = async function(req, res) {
     let data = req.body
     let savedData = await BookModel.create(data)
     res.send({msg: savedData})
}

const getBook = async function(req, res) {
    let allBooks = await BookModel.find()
    res.send({books: allBooks})

}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData

//book module
module.exports.createBook = createBook
module.exports.getBook = getBook