const express = require('express');
const logger = require('../logger/logger')

const info = require('../util/helper')

const format = require('../validator/formatter')

const _ = require('Lodash')

const router = express.Router();

router.get('/logger', function (req, res) {
    console.log('++++++++++++++++++++++++++++++++++++')
    
    console.log('Calling logger function')
    logger.wel()
    res.send('My logger api!')
});

router.get('/helper', function (req, res) {
    console.log('++++++++++++++++++++++++++++++++++++')
    console.log('I am inside the second route handler')
    console.log("calling helper function")
    info.date()
    info.month()
    info.batch()
    res.send('My helper api!')
});


router.get('/formatter', function (req, res) {
    console.log('++++++++++++++++++++++++++++++++++++')
    console.log("calling formatter function")
    format.trim()
    format.lower()
    format.upper()
    res.send('My formatterer api!')
});

router.get('/hello', function (req, res) {
    console.log('++++++++++++++++++++++++++++++++++++')
    const year = ["January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"]
    console.log("chunk created")
    console.log(_.chunk(year,3))

    console.log("------------------------------------------")
    let odd = [1,3,5,7,9,11,13,15,17,19]

    console.log("last 9 odd numbers:")
    console.log(_.tail(odd))
    console.log("------------------------------------------")
     
    console.log("union of array") 
    const arr1 = [1,4,7,4]   
    const arr2 = [1,3,5,10] 
    const arr3 = [4,8,7,9] 
    const arr4 = [5,6,7,8] 
    const arr5 = [2,3,4,5] 
    console.log(_.union(arr1,arr2,arr3,arr4,arr5))  
    console.log("--------------------------------------------")

    const pairs =  [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    console.log("object created form 2d array")

    console.log(_.fromPairs(pairs))  
    res.send('My hello array api!')
});

router.get('/test-me5', function (req, res) {
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason