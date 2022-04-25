let axios = require("axios")
//ed8bb4d17a4d9475ad955e65ac4c97ba


const weather = async (req, res) => {
    try {
        let city = req.query.city
        let id = req.query.id
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`
        }
        let result = await axios(options)
        res.status(200).send({ data: result.data })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

const temperature = async (req, res) => {
    try {
        let city = req.query.city
        let id = req.query.id
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`
        }
        let result = await axios(options)
        let data = result.data.main.temp
        console.log(data)
        res.status(200).send({ data: data })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

const sortTemperature = async (req, res) => {
    try {
        let city = req.body.city
        let id = req.body.id
        const arr = []
        for (let i = 0; i < city.length; i++) {
            let options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=${id}`
            }
            let result = await axios(options)
            const obj = {
                place: city[i],
                temp: result.data.main.temp
            }
        arr.push(obj)
        arr.sort((a,b)=>{
            return a.temp - b.temp
        })

    }
    console.log(arr)
        res.status(200).send({ data: arr })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}


module.exports = { weather, temperature, sortTemperature }
