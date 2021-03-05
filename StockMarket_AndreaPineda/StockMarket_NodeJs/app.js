
const express=require("express"); //to make sure that we can start our server from node js
const app=express(); //Start the server
const exphbs=require('express-handlebars');
const path=require('path');
const mysql=require("mysql");
var seedCompany=require("./models/seedCompanies");

const dotenv=require('dotenv');
const cookieParser=require('cookie-parser');//Setup cookies in the browser

dotenv.config({path:'./.env'});

//Create the database values for the connection using XAMPP
const db=mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
})

const publicDirectory=path.join(__dirname,'./public');//To make use of public files as css, javascript. dirname is current directory
app.use(express.static(publicDirectory));//Say express to use the publicdirectory

//Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended:false}));
//Parse JSON bodies (as sent by API clients)//Put the information of the form as JSON file
app.use(express.json());
app.use(cookieParser());

app.engine('hbs',exphbs({
    defaultLayout:'main',
    extname:'.hbs'
}));
app.set('view engine','hbs');//What type of engine, I am going to use to show the html

//Connect with the database
db.connect((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("MYSQL Connected ...")
        seedCompany.seedDb();        
    }
})

//Define Routes
app.use('/',require('./routes/pages'));
app.use('/auth',require('./routes/auth'));
app.use('/share_actions',require('./routes/share_actions'));

app.listen(5000, ()=>{
    console.log("Server started on Port 5000");
});//Tell the server express to which port I want to use for my project