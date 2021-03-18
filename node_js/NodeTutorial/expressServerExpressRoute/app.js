const express =require('express');
const path=require('path');


const bodyParser=require('body-parser');
const app=express();//By default, this method is gonna return an object and it is gonna have a bunch of methods that can be used in the app.
//Always that see use is a midleware. '/public is an alias', __dirname é o path of app.js

app.use('/public',express.static(path.join(__dirname,'static','index.html')));
app.set('view engine','ejs');

const people = require('./routes/people');

app.use('/people',people);
app.listen(3000);