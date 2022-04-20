

const validate= function ( req, res, next) {
    const head = req.headers['isfreeappuser']
    if(head==undefined){
        res.send("please give isFreeAppUser status")
    }
    else{

    console.log("Hi I am a middleware named validate")
    //counter
    next()
    }
}

module.exports.validate= validate

