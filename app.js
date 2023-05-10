const express=require("express");
const mydb=require("./config/db");
const app=express();
const bodyparser=require("body-parser");
app.use(bodyparser.json());
const rout=require("./routes/router");
app.use(rout);

app.listen(3300,()=>{
    console.log("port running at 3300....");
})
