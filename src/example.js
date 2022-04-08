
const missnumber = function(){

    let arr = [3,4,6,7,8,9]

for(let i=0 ;i<arr.length ; i++){
    let diff = arr[i+1] - arr[i]

    if(diff>1)
        res.send("missing number: " + (arr[i]+arr[i+1])/2 )
        
}
}
module.exports.missnumber = missnumber