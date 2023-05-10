const mysql=require("mysql");
//create connection
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Karthick@1601",
    database:"crud_task"

});
//connect
db.connect((err)=>{
    if(err){
       throw err;
    }
    else{
    console.log("mysql connected....");
    }
});




module.exports=db;