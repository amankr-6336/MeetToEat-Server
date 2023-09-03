const Table=require('../models/Table');
const Dish=require('../models/Dishes')


const tableCreateController=async (req,res)=>{
    try {
        const{tableNumber,capacity}=req.body;

        if(!tableNumber|| !capacity){
            return res.status(400).send('all fff');
        }

        const oldTable=await Table.findOne({tableNumber});

        if(oldTable){
            return res.status(409).send('all f bsdk');
        }
        const table=await Table.create({
            tableNumber,
            capacity
        })

        return res.status(200).send(table);


    } catch (error) {
        console.log(error);
    }
}

const getTableController=async(req,res)=>{
    try {
        //  console.log(req.body._id,"main huuuu");
        //  const table=await Table.findById(req.body._id).populate('dishes');
        const table=await Table.findById(req.body._id).populate('dishes');
        
        return res.status(200).send({table});
        
    } catch (error) {
        console.log(error);
    }
}

const getAllTableController=async(req,res)=>{
    try {
        //  console.log(req.body._id);
         const table=await Table.find();
        
        return res.status(200).send({table});
        
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    tableCreateController,
    getTableController,
    getAllTableController
}
