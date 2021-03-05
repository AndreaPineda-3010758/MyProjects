const { Router } = require('express');
const express = require('express');
const { requireAuth,checkUser } = require('../middleware/authMiddleware');
const authController=require('../controllers/auth');
const share_actionsController=require('../controllers/share_actions');

const router = express.Router();

router.get('*',checkUser);

router.get('/', (req, res)=>{
    res.render('index');
});
router.get('/test', (req, res)=>{
    res.render('test');
});

router.get('/register', (req, res)=>{
    res.render('register');
});

router.get('/login', (req, res)=>{
    res.render('login');
});

//router.get('/portfolio', requireAuth, share_actionsController.portfolio);
router.get('/portfolio',share_actionsController.portfolio);

router.get('/shares',share_actionsController.getShares);

router.get('/logout',authController.logout);

module.exports=router;
