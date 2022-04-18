const BatchModel = require("../models/batchModel")
const DevelopersModel = require("../models/developersModel")

const batches = async (req,res)=>{
    const data = req.body
    const batch = await BatchModel.create(data)  // create batch using post
    res.send({msg:batch})
}

const developers = async (req,res)=>{
    const data = req.body
    if(!data.batch){
        res.send("please give the batch id")
    }
    else{
        const temp = await BatchModel.findById(data.batch)
        if(!temp){
            res.send("batch-id is invalid")
        }
        else{
        const dev = await DevelopersModel.create(data)
         res.send({msg:dev})
        }
    }
}

const scholorship = async (req,res)=>{
    let percent = req.params.percentage
    const data = await DevelopersModel.find(
        { $and: [   {gender:"female"},{ percentage: {$gte:percent} }   ]  }
    ).populate('batch')
    res.send({msg:data})
}


const getDevelopers = async (req,res)=>{
    let percent = req.query.percentage//accessing query parameters
    let program = req.query.program

    const b = await BatchModel.find({name:program}).select({_id:1}) //from batch find batchid which has name=program
    //in program we have Uranium  so name:uranium

    const data = await DevelopersModel.find(
        { $and: 
            [   {batch: {$in:b }  } ,  { percentage: { $gte: percent} }  ]// b is array of object containting id of batch
            
        }
    ).populate('batch')
    res.send({msg:data})
}
module.exports.batches=batches
module.exports.developers=developers
module.exports.scholorship=scholorship
module.exports.getDevelopers=getDevelopers