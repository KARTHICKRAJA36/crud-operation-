const usermodel=require("../models/user")

class usercontroller{

static async  getalluser(req,res)
{
var results=await  usermodel.getusers();

if(results)
res.send(results)
}

static async addnewuser(req,res)
{
    var name=req.body.name;
    var address=req.body.address;
    var id=req.body.id;
    var x=await usermodel.addus
    if(x==true)
    res.send("added successfully");
    else
    res.send("added failed");
}
static async deleteuser(req,res)
{
    const id=req.body.id;
if(id){
    var rslt=await usermodel.deleteuser(id);
    if(rslt)
    res.send("deleted successfully")
    else
    res.send("failed to  delete")
}
}
 
static async updateuser(req,res){
    const id=req.body.id;
    const name=req.body.name;
    const address=req.body.address;

  var y=  await usermodel.updateuser(name,address,id)
  if(y)
  res.send("data updated successfully");
  else
  res.send("failed to update");
}







}
module.exports=usercontroller;