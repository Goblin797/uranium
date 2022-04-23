const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const createUser = async function (req, res) {
  try {
    let data = req.body;
    if (Object.keys(data).length != 0) {
      let savedData = await userModel.create(data);
      return res.status(201).send({ msg: savedData });
    }
  }
  catch (err) {
    res.status(400).send({ msg: Error, error: err.message })
  }

};



const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  try{

  let user = await userModel.findOne({ emailId: userName, password: password, isDeleted: false });
  if (!user)
    return res.status(404).send({
      status: false,
      msg: "username or the password is not corerct",
    });

let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "functionup-thorium"
  );
  res.setHeader("x-auth-token", token);
  res.status(200).send({ status: true, data: token });

}
catch(err){
  res.status(500).send({ msg: Error, error: err.message })
}
};



const getUserData = async function (req, res) {
  let userId = req.params.userId;
  
  try
  {
  let userDetails = await userModel.findById(userId);
  if (!userDetails || userDetails.isDeleted == true)
    return res.status(404).send({ status: false, msg: "No such user exists" });
  
    res.status(200).send({ status: true, data: userDetails });

  }
  catch(err){
    res.status(500).send({ msg: Error, error: err.message })
  }


};





const updateUser = async function (req, res) {


  try
  {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  
  if (!user || user.isDeleted == true) {
    return res.status(404).send("No such user exists");
  }

  let userData = req.body;
  if (Object.keys(userData).length != 0) {
      let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
      return res.status(200).send({ status: updatedUser, data: updatedUser });
  }
  res.status(404).send({msg:"what to update is not given"})
}
catch(err){
  res.status(500).send({ msg: Error, error: err.message })
}
};






const deleteUser = async (req, res) => {
 

  try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.status(404).send("No such user exists");
  }

  user.isDeleted = true
  user.save()
  res.status(200).send({ data: user });
  
  }
  catch(err){
    res.status(500).send({ msg: Error, error: err.message })
  }
}


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser
