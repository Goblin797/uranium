const axios = require('axios')

//"181913649"

const allMemes = async (req,res)=>{
    try{
    let options = {
        method:"get",
        url:"https://api.imgflip.com/get_memes"
    }
    let result = await axios(options)

    res.status(200).send({msg:result.data})
}
catch(err){
    res.status(500).send({msg:err.message})
}
}


const createMemes = async (req, res) => {
    try {
        let some = req.body
        console.log(some.text0)
        let options = {
            method: 'get',
            url: `https://api.imgflip.com/caption_image?template_id=${some.template_id}&text0=${some.text0}&text1=${some.text1}&username=${some.username}&password=${some.password}`,
    
        }
        let result = await axios(options)
        res.status(200).send({ data: result.data })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

module.exports ={allMemes,createMemes}