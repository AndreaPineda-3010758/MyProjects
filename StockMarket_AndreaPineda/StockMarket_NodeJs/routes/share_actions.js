const { Router } = require('express');
const express = require('express');
const router = express.Router();

const share_actionsController=require('../controllers/share_actions');


router.post('/balance', share_actionsController.balance);
router.post('/sellShare', share_actionsController.sellShare);
router.post('/buyShare', share_actionsController.buyShare);

module.exports=router;