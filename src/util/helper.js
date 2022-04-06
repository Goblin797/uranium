const d = new Date()

const printDate = function(){
    console.log("today date is : ",d.getDate())
}

const printMonth = function(){
    console.log("month is : ",d.getMonth()+1)
}

const getBatchInfo = function(){
    console.log("Uranium W3 D3 ,the topic for today is Nodejs module system")
}

module.exports.date = printDate
module.exports.month = printMonth
module.exports.batch = getBatchInfo