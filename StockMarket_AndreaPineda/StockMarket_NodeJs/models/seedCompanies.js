module.exports = {
    seedDb: function () {        
        const db = require('../models/dbSetting');
        db.query('SELECT * FROM share_companies',(error,results)=>{
            console.log(results);
            if (!results.length>0) {
                db.query('INSERT INTO share_companies SET ?',{company_name:"AMAZON",shares_number:500890000,sell_price:2756.08,buy_price:2760.96},(error,results)=>{
                    if (error) {
                        console.log(error);
                    }else{
                        console.log(results);
                    }
                })
                db.query('INSERT INTO share_companies SET ?',{company_name:"TESLA",shares_number:948000000,sell_price:1077.73,buy_price:1078.94},(error,results)=>{
                    if (error) {
                        console.log(error);
                    }else{
                        console.log(results);
                    }
                })
                db.query('INSERT INTO share_companies SET ?',{company_name:"APPLE",shares_number:948000000,sell_price:364.8,buy_price:365.31},(error,results)=>{
                    if (error) {
                        console.log(error);
                    }else{
                        console.log(results);
                    }
                })
                db.query('INSERT INTO share_companies SET ?',{company_name:"WIRECARD",shares_number:40000000,sell_price:5.48,buy_price:5.86},(error,results)=>{
                    if (error) {
                        console.log(error);
                    }else{
                        console.log(results);
                    }
                })
                db.query('INSERT INTO share_companies SET ?',{company_name:"EBAY",shares_number:95000000,sell_price:52.48,buy_price:52.57},(error,results)=>{
                    if (error) {
                        console.log(error);
                    }else{
                        console.log(results);
                    }
                })
            }
        })
    }};
