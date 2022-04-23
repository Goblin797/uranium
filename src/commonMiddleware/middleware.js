const jwt = require("jsonwebtoken");




const validateToken = async function (req, res, next) {
    try
    {
    let token = req.headers['x-Auth-Token'] || req.headers['x-auth-token']
    if (!token) {
        res.status(404).send({ status: false, msg: "token must be present" });
    }
  
        let decodedtoken = jwt.verify(token, "functionup-thorium")
        if (!decodedtoken) {
            return res.status(401).send({ status: false, msg: "token is invalid" });
        
            
        }
        next();
    }
    catch (err) {
            res.status(500).send({ msg: Error, error: err.message })

        }
    
    
}

const authorization = async function (req, res, next) {

    let token = req.headers['x-Auth-Token'] || req.headers['x-auth-token']
    let user = req.params.userId
    
    try
    {
    const decodedtoken = jwt.verify(token, "functionup-thorium")
    if (!decodedtoken)
        return res.status(401).send({ status: false, msg: "token is invalid" });
    
    const id = decodedtoken.userId
    if (user != id)
        return res.status(403).send({ status: false, msg: "cannot access" });
    next()

    }
    catch(err){
        res.status(500).send({ msg: Error, error: err.message })
    }

}

module.exports = { validateToken, authorization }