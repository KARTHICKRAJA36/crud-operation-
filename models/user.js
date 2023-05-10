const db=require("../config/db");
const usercontroller = require("../controllers/usercontroller");
class usermodel{

    static async getusers()
    {
        return new Promise(resolve=>{
        db.query('select * from employeedetails ',[],function(err,result){
           if(!err)
           resolve(result)
          })
        }) 
    }


    static async adduser(name,address,id){
        return new Promise(resolve=>{
            db.query('insert into employeedetails values (?,?,?)',[name,address,id],function(err,result){
                if(!err)
                resolve(true)
                else
                resolve (false)
        })
    })

}
    static async deleteuser(id)
    {
        return new Promise(resolve=>{
                db.query('delete from employeedetails where id=?',[id],function(err,result){
                    if(err)
                    resolve(false);
                    else
                    resolve(true);
                })
        })
    }
    static async updateuser(name,address,id)
    {
        return new Promise(resolve=>{
        db.query('update employeedetails set name=?,address=? where id=?',[name,address,id],function(err,result){
            if(err)
            resolve (false);
            else
            resolve(true);
        })
    })

}
}
module.exports=usermodel;
