const express=require("express");
const usercontroller=require("../controllers/usercontroller")
const router=require("express").Router();
router.get('/',(req,res,next)=>{
res.send("hello");
})



router.get("/alluser",usercontroller.getalluser);
router.post("/adduser",usercontroller.addnewuser);
router.post("/deleteuser",usercontroller.deleteuser);
router.post("/updateuser",usercontroller.updateuser);


module.exports=router;