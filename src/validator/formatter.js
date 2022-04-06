let str = "  FunctionUp  "

const trimm = function(){
    let a = str.trim()
    console.log("this is trimed string :",a)
}

const changetoLowerCase = function(){
    console.log("converted to lower case :",str.toLowerCase())
}

const changetoUpperCase = function(){
    console.log("converted to upper case :",str.toUpperCase())
}

module.exports.trim = trimm
module.exports.lower = changetoLowerCase
module.exports.upper = changetoUpperCase