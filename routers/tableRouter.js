const router=require('express').Router();

const tableController=require('../controllers/tableController');

router.post('/createtable',tableController.tableCreateController);
router.post('/gettable',tableController.getTableController);
router.get('/getalltable',tableController.getAllTableController);

module.exports=router