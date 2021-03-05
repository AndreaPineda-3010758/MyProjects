const mysql=require("mysql");
const jwt=require('jsonwebtoken');


//Create the database values for the connection using XAMPP
const db=mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
})

const requireAuth=(req,res,next)=>{
    const token=req.cookies.jwt;

    //check json web token exists & is verified
    if(token){
        jwt.verify(token,process.env.JWT_SECRET,(err,decodedToken)=>{
            if(err){
                console.log(err.message);
                res.redirect('/login');
            }else{
                console.log(decodedToken);
                next();
            }
        })
    }
    else{
        res.redirect('/login');
    }
}

//check current user
const checkUser=(req,res,next)=>{
    const token=req.cookies.jwt;
    if(token){
        jwt.verify(token,process.env.JWT_SECRET,(err,decodedToken)=>{
            if(err){
                console.log(err.message);
                res.locals.user=null;
                next();
            }else{                
                db.query('SELECT * FROM users WHERE user_id =?',[decodedToken.user_id],(error,results)=>{
                    if (error) {
                        console.log(error);
                        console.log(err.message);
                        res.locals.user=null;
                        next();
                    }
                    else{
                        res.locals.user=results[0];
                        next();
                    }
                })
            }
        })
    }
    else{
        res.locals.user=null;
        next();
    }
}

module.exports={requireAuth,checkUser};