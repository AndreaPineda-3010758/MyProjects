const mysql=require("mysql");
//Create the database values for the connection using XAMPP
const db=mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
})
/*host: (local or IP of the server)
 user and password is for connect with xampp that by default has a root user and a password ''
*/
module.exports=db;