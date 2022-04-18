const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")

const BatchDevController = require("../controllers/batch-devController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", bookController.createAuthor  )  //author post req

router.post("/createPublisher",bookController.createPublisher)  //publisher posr req


router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

//router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooks", bookController.getBooks)//p4

router.put("/books", bookController.bookupdate)

router.put("/updatedata/:age",bookController.updatedata)


//batch and developers

router.post("/batches",BatchDevController.batches)

router.post("/developers",BatchDevController.developers)

router.get("/scholarship/:percentage",BatchDevController.scholorship)

router.get("/getdevelopers",BatchDevController.getDevelopers)

module.exports = router;