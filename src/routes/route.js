const express = require('express');
const logger = require('./logger')

const router = express.Router();

// problem 1
router.get('/GET/movies', function(req, res) {
    const movieList = ['avengers','naruto','dragon ball','jujutsu kaisen','hunet X hunter','death note','DC','demon slayer','tokyo avengers']
    res.send(movieList)
    console.log("  ")
})

//problem 2/3
router.get('/GET/movies/:indexNumber', function(req, res) {
    const movieList = ['avengers','naruto','dragon ball','jujutsu kaisen','hunet X hunter','death note','DC','demon slayer','tokyo avengers']
    let len = movieList.length
    const index = req.params.indexNumber
    if(index > len)
        res.send("please enter valid number")
    else
        res.send("the " + index + "rd movie is : " +movieList[index])
})

//problem 4
router.get('/GET/films', function(req, res) {
    const movieObject = [ 
                        {"id":1,"name":"the avengers"},
                        {"id":2,"name":"naruto"},
                        {"id":3,"name":"dragon ball"},
                        {"id":4,"name":"jujuutsu kaisen"},
                        {"id":5,"name":"hunter X hunter"},
                        {"id":6,"name":"death note"},
                        {"id":7,"name":"DC"},
                        {"id":8,"name":"demon slayer"},
                        {"id":9,"name":"tokyo revengers"}
                        ]

    
    res.send(movieObject)
})

//problem 5
router.get('/GET/films/:filmId', function(req, res) {
    const movieObject = [ 
                        {"id":1,"name":"the avengers"},
                        {"id":2,"name":"naruto"},
                        {"id":3,"name":"dragon ball"},
                        {"id":4,"name":"jujuutsu kaisen"},
                        {"id":5,"name":"hunter X hunter"},
                        {"id":6,"name":"death note"},
                        {"id":7,"name":"DC"},
                        {"id":8,"name":"demon slayer"},
                        {"id":9,"name":"tokyo revengers"}
                        ]

    

    let len = movieObject.length
    const fid = req.params.filmId

    if(fid > len)
        res.send("no movie exist with the id : ")
    else
        for(let i=0 ;i< len ;i++){
            if(movieObject[i].id == fid)
                res.send(movieObject[i])
    }
    
})





router.get('/user-profile/:abcd', function(req, res) {
    console.log(req)
    console.log(req.params.abcd)
    res.send('dummy response')
})

router.get('/test-me', function (req, res) {
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
    res.send('My first ever api!')
});




module.exports = router;
// adding this comment for no reason