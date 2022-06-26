const express = require('express')
const fs=require('fs');
const app = express()
const port = 8000
let item =[];

app.get('/additem',(req,res) => {

    item.push("mango");
    item.push("banana");
    item.push("apple");
    res.send("items in the cart is "+item);
})

app.get('/updateitem',(req,res)=>{
    item[1]="pineapple";
    res.send("items in the cart is "+" "+item)
})

app.listen(port,()=>{
    console.log(`Example app listening on port http://localhost: ${port}`);
})