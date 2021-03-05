const { Router } = require('express');
const express = require('express');
const router = express.Router();

const authController=require('../controllers/auth');


router.post('/register', authController.register); //It is a controller that is going to lead with all the data from the form
router.post('/login', authController.login);

module.exports=router;
