const mongoose=require('mongoose');
const dish=require('./Dishes')

const tabelSchema=mongoose.Schema({
    tableNumber:{
        type:Number,
        required:true,
        unique:true
    },
    capacity:{
        type:Number
    },
    dishes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'dish'
        }
    ]

})

module.exports=mongoose.model('table',tabelSchema);