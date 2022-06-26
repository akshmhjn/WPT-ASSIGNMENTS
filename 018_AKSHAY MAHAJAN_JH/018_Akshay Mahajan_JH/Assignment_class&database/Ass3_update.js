let data={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"nodejs",
    port:3306
};
const mysql=require("mysql2");
const con=mysql.createConnection(data);
let status=false;
let resourcename="River";
con.query("update resource set status=? where resourcename=?",[status,resourcename],(err,res)=>{
    if(err){
        console.log("Error while updating");
    }else{
        if(res.affectedRows===0){
            console.log("Zero rows affeted update failed");
        }else{
            console.log("Update successfull");
        }
    }
});