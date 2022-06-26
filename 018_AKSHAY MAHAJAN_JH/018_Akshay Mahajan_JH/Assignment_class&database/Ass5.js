const express=require("express");
const app=express();
app.use(express.static("cf"));
let datar={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"nodejs",
    port:3306
};
const mysql=require("mysql2");
const con=mysql.createConnection(datar);
app.get("/Accdetails",(req,res)=>{
    let input=req.query.accno;
    let datafound={status:false,data:[]};

    con.query("select * from bank where accno=?",[input],(err,rows)=>{
        if(err){
            console.log("error occured while fetching database");
        }else{
            if(rows.length>0){
                console.log("Hello Akshay");
           
            datafound.status=true;
            datafound.data=rows; 
             }
        }
        res.send(datafound);
    });
});
app.listen(1400,function(){
    console.log("server running at port 1400")
});