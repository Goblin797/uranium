const players = [
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ]
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ]
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ]
    },
]


const addToPlayer = function (req,res) 
{
    const newPlayer = req.body.name //object inside the body is access here
    let flag = 1 //this is to check if name exist in our array of object
    
    for(let i=0 ; i< players.length ;i++)//loop through all object of array
    {
        if(players[i].name == newPlayer) //if name match our certain player name in array of object
             flag = 0                     //make flag = 0
             
    }

    if(flag==1){                //if flaf =1 so name is not presnet in our array
        players.push(req.body)  // so push that object inside player array of object
        res.send(players)}      
    else
        res.send("player already exist")//if not response player exist
        
}
module.exports.addToPlayer = addToPlayer