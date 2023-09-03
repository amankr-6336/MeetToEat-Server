const router=require('express').Router();

const dishController=require('../controllers/dishController');

router.post('/createdish',dishController.dishCreateController);
router.get('/getalldish',dishController.getAllDishController);
router.get('/getdish',dishController.getDishController);

module.exports=router