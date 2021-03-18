const express = require('express');
const route = express.Router();

//This middleware is gonna work only with the base URL /people if I don´t put it the middleware will not work
route.use((req,res,next)=>{
    console.log('middleware being used');
    next();
})

route.get('/',(req,res)=>{
    res.send('/being hit');
});

route.get('/example',(req,res)=>{
    res.send('/example being hit');
});

module.exports=route;