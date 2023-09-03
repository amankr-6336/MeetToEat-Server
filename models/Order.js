const mongoose=require('mongoose');


const OrderSchema=mongoose.Schema({
    tableNumbers:{
        type:Number,
        required:true
    },
    dishes: [{
        dishName: {
          type: String,
          required: true
        },
        quantity: {
          type: Number,
          required: true,
          min: 1
        },
        subTotal:{
            type:Number,
           
        }
        
    }],
    totalAmount: {
        type: Number,
        required: true
    }

});

module.exports=mongoose.model('order',OrderSchema);