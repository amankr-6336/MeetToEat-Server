
const router=require('express').Router();

const  orderController=require('../controllers/orderController');

router.post('/confirmed',orderController.orderCreateController);
router.post('/orderid',orderController.getOrderController);

module.exports=router