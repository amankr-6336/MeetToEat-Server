const Dish=require('../models/Dishes');
const Table=require('../models/Table');
// const cloudinary=require('cloudinary').v2

const dishCreateController=async(req,res)=>{
    try {
        
        // const{typeoffood,category,dishName,brief,price,image}=req.body;

        // // const cloudImg=await cloudinary.uploader.upload(image,{
        // //     folder:"restro"
        // // })

        // const dish=await Dish.create({
        //    typeoffood,
        //    category,
        //    dishName,
        //    brief,
        //    price,
        //    image:{
        //     // publicId:cloudImg.public_id,
        //     // url:cloudImg.url
        //    }
        // })

        // const tables= await Table.find();

        // // tables.dishes.push(dish._id);
        // // await tables.save();
        // // console.log(dish._id);
        

        // for(let i=0;i<tables.length;i++){
        //       tables[i].dishes.push(dish._id);
        //       await tables[i].save();  
        // }

        

        // return res.status(200).send({dish});



    } catch (error) {
        // console.log(error);
    }
}

const getAllDishController=async(req,res)=>{
    try {
        const dish=await Dish.find();
        return res.status(200).send({dish});
    } catch (error) {
        // console.log(error);
    }
}

const getDishController=async(req,res)=>{
    try {
        const dish=await Dish.findById(req.body._id);
        return res.status(200).send({dish});
    } catch (error) {
        // console.log(error);
    }
}

module.exports={
    dishCreateController,
    getAllDishController,
    getDishController
}