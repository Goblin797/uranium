const { default: mongoose } = require('mongoose')
const mongooose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    userId:{
        type:ObjectId,
        ref:'User'
    },
    productId:{
        type:ObjectId,
        ref:'Product'
    },
    amount:{
        type:Number,
        default:0
    },
    isFreeAppUser:Boolean,
        

    date:Date

},{timestamps:true})

module.exports = mongooose.model('Order',orderSchema)