const express=require('express');
const dbConnect=require('./dbConnect');
const tableRouter=require('./routers/tableRouter')
const dishRouter=require('./routers/dishRouter')
const orderRouter=require('./routers/orderRouter')
const cloudinary=require('cloudinary').v2
const cors=require('cors');
const dotenv=require('dotenv');

dotenv.config('./env')


cloudinary.config({ 
    cloud_name: `${process.env.CLOUD_NAME}`, 
    api_key: `${process.env.API_KEY}`, 
    api_secret: `${process.env.API_SECRET}` 
  });
  

const app=express();

app.use(express.json());

app.use(cors({
    credentials:true,
    origin:`${process.env.BASE_URL}`
}))

app.use('/table',tableRouter);
app.use('/dish',dishRouter);
app.use('/order',orderRouter);

app.get('/',(req,res)=>{
    res.status(200).send('ok from serverrrrrrrrrrrr');
})




const PORT=process.env.PORT || 4001;
dbConnect();

app.listen(PORT,()=>{
    console.log(`listeining to port :${PORT}`);
})

