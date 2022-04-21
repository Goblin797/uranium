const jwt = require("jsonwebtoken");


const validateToken = async function(req,res,next){
    let token = req.headers['x-Auth-Token'] || req.headers['x-auth-token']
// Check if the token is present

if(!token) 
{
    res.send({ status: false, msg: "token must be present" });
}
// Check if the token present is a valid token
let decodedtoken = jwt.verify(token,"functionup-thorium")
if(!decodedtoken){
    res.send({ status: false, msg: "token is invalid" });
}
    

next();


}

module.exports.validateToken =validateToken