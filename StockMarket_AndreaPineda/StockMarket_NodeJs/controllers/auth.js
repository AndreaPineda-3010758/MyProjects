const db = require('../models/dbSetting');
const jwt=require('jsonwebtoken');//For token
const bcrypt=require('bcryptjs');


exports.logout=(req,res)=>{

    const cookieOptions={
        expires:new Date(
            Date.now()+1
        ),
        httpOnly:true
    }
    //Set the cookie with a very very small value 
    res.cookie('jwt','',cookieOptions);
    res.status(200).redirect("/");
}

exports.login=async(req,res)=>{
    try {
        const{email,password}=req.body;

        if (!email || !password) {
            return res.status(400).render('login',{
                message:'Please provide an email and password'
            }

            )
        }

        db.query('SELECT * FROM users WHERE email =?',[email],async(error,results)=>{
            
            if (!results.length>0) {
                res.status(401).render('login',{
                    message:'Email not registered'
                })
            }else if (!(await bcrypt.compare(password,results[0].password))) {
                res.status(401).render('login',{
                    message:'Password is incorrect'
                })
            } else{
                const user_id=results[0].user_id;
                //Creation Of the Token
                const token=jwt.sign({user_id},process.env.JWT_SECRET,{
                    expiresIn:process.env.JWT_EXPIRES_IN
                });
                console.log("The token is: "+token);

                //Creation Of the Cookie, Cooki_expires is in days too
                const cookieOptions={
                    expires:new Date(
                        Date.now()+process.env.JWT_COOKIE_EXPIRES*24*60*60*1000
                    ),
                    httpOnly:true
                }
                //Setup cookie in the browser jwt is the name of the cookie
                res.cookie('jwt',token,cookieOptions);
                res.status(200).redirect("/");

            }
        })
    } catch (error) {
        console.log(error)
    }
}

exports.register=(req,res)=>{    

    const{name,email,password,passwordConfirm}=req.body;

    db.query('SELECT email FROM users WHERE email = ?',[email],async(error,results)=>{
        if (error) {
            console.log(error);
        }
        if (results.length>0) {
            return res.render('register',{
                message:'That email is already in use'
            })
        }
        else if (password!== passwordConfirm) {
            return res.render('register',{
                message:'Passwords do not match'
            })
        }
        //Since it can takes more seconds more than the code needs to run then it is better to make it async
        //8 rounds of encryption
        let hashedPassword=await bcrypt.hash(password,8);//How many rounds to hash the password
        console.log(hashedPassword);

        db.query('INSERT INTO users SET ?',{name:name,email:email,password:hashedPassword,balance:0.00},(error,results)=>{
            if (error) {
                console.log(error);
            }else{
                
                return res.render('register',{
                    message:'User Registered'
                })
            }
        })
    })

}