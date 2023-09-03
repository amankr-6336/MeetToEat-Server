const Order=require('../models/Order');


const orderCreateController=async(req,res)=>{
    try {
        
        const{tableNumbers,products,TotalAmount}=req.body;

        const order=await Order.create({
            tableNumbers:tableNumbers,
            dishes:products,
            totalAmount:TotalAmount
        })

        return res.status(200).send({order});

    } catch (error) {
        console.log(error);
    }
}

const getOrderController=async(req,res)=>{
    try {
         
        const order=await Order.findById(req.body._id);

        return res.status(200).send({order});
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    orderCreateController,
    getOrderController
}