const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const req = require("express/lib/request");
const res = require("express/lib/response");

var app = express();

app.use(bodyParser.json());

let con = mysql.createConnection({
    host : 'online-shopping.cr79gqiqhitl.ap-south-1.rds.amazonaws.com',
    user : 'user',
    password :"12345",
    port: 3306,
    database: "online_shopping"
});

con.connect((err)=>{
    if(err)
    console.log(err.message);
    else
    console.log("connected succesfully");
});

app.post('/api/insert-ship',(req,res)=>{
    const register = {
   
        ship_id:req.body.ship_id,
       cart_c_name:req.body.cart_c_name,   
       delivery_name:req.body.delivery_name,
       exp_date:req.body.exp_date,    
       or_id:req.body.or_id,         
       shop_name:req.body.shop_nam
    }


const sqlquery = "insert into shipment set ? ";
const query = con.query(sqlquery,register,(err,result)=>{
    res.send(JSON.stringify({"status":200,"response":result}));
  });
});

app.get('/api/get-shipment/details',(req,res)=>{

    var sqlquery = "SELECT * FROM shipment";
    var query = con.query(sqlquery,(err,result)=>{
        res.send(JSON.stringify({"status" : 200,"response":result }));
    });
});

app.get('/api/get-shipment/details/:id',(req,res)=>{

    var sqlquery = "SELECT * FROM shipemnt where ship_id = ?";
    var query = con.query(sqlquery,[req.params.id],(err,result)=>{
        res.send(JSON.stringify({"status" : 200,"response":result }));
    });
});

app.put('/api/edit-delivery/:id',(req,res)=>{
    const sqlquery = "UPDATE shipment SET delivery_name  = '"+req.body.delivery_name +"'where ship_id =?" ;
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
           res.send(JSON.stringify({"status" : 200, " response" : result}));
        
    });
});

app.put('/api/edit-expire/:id',(req,res)=>{
    const sqlquery = "UPDATE shipment SET exp_date  = '"+req.body.exp_date +"'where ship_id =?" ;
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
           res.send(JSON.stringify({"status" : 200, " response" : result}));
     
 });
});