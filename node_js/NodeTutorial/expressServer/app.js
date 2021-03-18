const express =require('express');
const path=require('path');
const Joi=require('joi');
const bodyParser=require('body-parser');
const app=express();//By default, this method is gonna return an object and it is gonna have a bunch of methods that can be used in the app.
//Always that see use is a midleware. '/public is an alias', __dirname é o path of app.js

app.use('/public',express.static(path.join(__dirname,'static','index.html')));
app.set('view engine','ejs');
app.get('/:userQuery',(req,res)=>{
    res.render('index',{data:{userQuery:req.params.userQuery,
                            searchResults:['book1','book2','book3'],
                        loggedIn: false,
                    username: 'andreaPineda'}});
})
//It allows us to parse URL encoded forms it parses the data for us and attaches it to the requested body the extended
app.use(bodyParser.urlencoded({extended:false}));

app.use((req,res,next)=>{
    req.banana='banana';
    console.log(req.url,req.method);
    next();
});

// //Only will execute if URL match with /example
// app.use('/example',(req,res,next)=>{
//     console.log(req.url,req.method);
//     next();
// });

//JSON
//app.use(bodyParser.json());

app.get('/',(req,res)=>{
    //res.send('Hello World');
    //res.sendFile(path.join(__dirname,'static','index.html'));
    //Instead of send an static file as I sent above, I am going to send dynamic files
    res.render('index');
});

app.post('/',(req,res)=>{
    console.log(req.body);
    const schema=Joi.object().keys({
        email:Joi.string().trim().email().required(),
        password: Joi.string().min(5).max(10).required()
    });
    const validation=schema.validate(req.body,(err,result)=>{
        if (err) {
            console.log(err);
            res.send('an error has occurred');
        }
        console.log(result);
        res.send('successfully posted data err..................');
    });
    //database work here
    //res.json({success:true});
    res.send(validation);
});

app.get('/example',(req,res)=>{
    res.send('hitting example route');
});
app.get('/example/:name/:age',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    //res.send('example with route params');
    res.send(req.params.name+":"+req.params.age);
});
app.listen(3000);