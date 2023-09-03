const mongoose=require('mongoose');
const Table = require('./Table');


const dishSchema=mongoose.Schema({
    typeoffood:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    dishName:{
        type:String,
        required:true
    },

    brief:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        publicId:String,
        url:String
    }
})

module.exports=mongoose.model('dish',dishSchema);