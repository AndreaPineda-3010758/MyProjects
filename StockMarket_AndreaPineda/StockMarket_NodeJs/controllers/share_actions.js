const db = require('../models/dbSetting');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');

exports.portfolio=(req,res)=>{
    const token=req.cookies.jwt;

    //check json web token exists & is verified
    if(token){
        jwt.verify(token,process.env.JWT_SECRET,(err,decodedToken)=>{
            if(err){                
                console.log(err.message);
                res.redirect('/login');
            }else{
                db.query('SELECT * FROM share_items WHERE user_id =?',[decodedToken.user_id],(error,results)=>{
                    if (error) {
                        console.log(error);
                        console.log(err.message);
                        res.locals.user=null;
                    }
                    else{
                        return res.render('portfolio',{
                            shareItems:results
                        })
                    }
                })
                
            }
        })
    }
    else{
        res.redirect('/login');
    }
   
}

exports.sellShare=(req,res)=>{
    
const{share_company_id,user_id}=req.body;


if(user_id!=null){
    db.query('SELECT * FROM share_items WHERE share_company_id = ? AND user_id = ?',[share_company_id,user_id],(error,results)=>{
        if (error) {
            console.log(error);
            console.log(err.message);
            res.locals.user=null;
        }
        else if(results.length>0){
            const share_item_id=results[0].share_item_id;
            db.query('SELECT * FROM users WHERE user_id =?',[user_id],(error,results)=>{
                if (error) {
                    console.log(error);
                    console.log(err.message);
                    res.locals.user=null;
                }
                else{
                    
                    const currentBalance=Number(results[0].balance);
                    db.query('SELECT * FROM share_companies WHERE share_company_id =?',[share_company_id],(error,results)=>{
                        if (error) {
                            console.log(error);
                            console.log(err.message);
                            res.locals.user=null;
                        }
                        else{
                            const share_sell_price=Number(results[0].sell_price)
                            const currentSharesNumber=Number(results[0].shares_number);                            
                            db.query('UPDATE users SET balance= ? WHERE user_id = ?',[currentBalance+share_sell_price,user_id],async(error,results)=>{
                                if (error) {
                                    console.log(error);
                                }
                                else {
                                    db.query('UPDATE share_companies SET shares_number= ? WHERE share_company_id = ?',[currentSharesNumber+1,share_company_id],async(error,results)=>{
                                        if (error) {
                                            console.log(error);
                                        }
                                        else {
                                            db.query('DELETE FROM share_items WHERE share_item_id = ?',[share_item_id],(error,results)=>{
                                                if (error) {
                                                    console.log(error);
                                                }else{
                                                    return res.redirect('/shares');
                                                }
                                            })
                                        }})
                                    

                                    
                                }           
                            })
                            
                        }})                                       
                }
            }) 
        }
        else{            
            res.redirect('/shares');
        }
    })
                           
}
else{
    res.redirect('/login');
}        
   
}

exports.buyShare=(req,res)=>{
    
    const{share_company_id,user_id}=req.body;
    
    if(user_id!=null){
        
                db.query('SELECT * FROM users WHERE user_id =?',[user_id],(error,results)=>{
                    if (error) {
                        console.log(error);
                        console.log(err.message);
                        res.locals.user=null;
                    }
                    else{
                        
                        const currentBalance=Number(results[0].balance);
                        db.query('SELECT * FROM share_companies WHERE share_company_id =?',[share_company_id],(error,results)=>{
                            if (error) {
                                console.log(error);
                                console.log(err.message);
                                res.locals.user=null;
                            }
                            else{
                                share_buy_price=Number(results[0].buy_price )
                                if (currentBalance>=share_buy_price) {
                                    const newSharesNumber=Number(results[0].shares_number)-1;
                                db.query('UPDATE users SET balance= ? WHERE user_id = ?',[currentBalance-share_buy_price,user_id],async(error,results)=>{
                                    if (error) {
                                        console.log(error);
                                    }
                                    else {
                                        db.query('UPDATE share_companies SET shares_number= ? WHERE share_company_id = ?',[newSharesNumber,share_company_id],async(error,results)=>{
                                            if (error) {
                                                console.log(error);
                                            }
                                            else {
                                                db.query('INSERT INTO share_items SET ?',{share_company_id:share_company_id,user_id:user_id},(error,results)=>{
                                                    if (error) {
                                                        console.log(error);
                                                    }else{
                                                        
                                                        return res.redirect('/shares');
                                                    }
                                                })
                                            }})
                                        
    
                                        
                                    }           
                                })
                                } else {
                                    res.redirect('/shares');
                                }
                                
                            }})                                       
                    }
                })                
    }
    else{
        res.redirect('/login');
    }        
       
    }

exports.getShares=(req,res)=>{
    const token=req.cookies.jwt;

    //check json web token exists & is verified
    if(token){
        jwt.verify(token,process.env.JWT_SECRET,(err,decodedToken)=>{
            if(err){                
                console.log(err.message);
                res.redirect('/login');
            }else{
                db.query('SELECT * FROM users WHERE user_id =?',[decodedToken.user_id],(error,results)=>{
                    if (error) {
                        console.log(error);
                        console.log(err.message);
                        res.locals.user=null;
                    }
                    else{
                        var currentbalance=results[0].balance;
                        const user_id=results[0].user_id;
                        db.query('SELECT * FROM share_companies',(error,results)=>{
                            if (error) {
                                console.log(error);
                                console.log(err.message);
                                res.locals.user=null;
                            }
                            else{                            
                                return res.render('shares',{
                                    balance:currentbalance,
                                    user_id:user_id,
                                    share_companies:results
                                })
                            }
                        })
                    }
                })
                
            }
        })
    }
    else{
        res.redirect('/login');
    }
    
}

exports.balance=(req,res)=>{
    
        const{user_id,addMoney}=req.body;
    //check json web token exists & is verified
    if(user_id!=null){
        
                db.query('SELECT * FROM users WHERE user_id =?',[user_id],(error,results)=>{
                    if (error) {
                        console.log(error);
                        console.log(err.message);
                        res.locals.user=null;
                    }
                    else{
                        
                        const newBalance=Number(results[0].balance)+Number(addMoney);
                        db.query('UPDATE users SET balance= ? WHERE user_id = ?',[newBalance,user_id],async(error,results)=>{
                            if (error) {
                                console.log(error);
                            }
                            else {
                                return res.redirect('/shares');
                            }           
                        })
                        
                    }
                })                
    }
    else{
        res.redirect('/login');
    }        
       
}