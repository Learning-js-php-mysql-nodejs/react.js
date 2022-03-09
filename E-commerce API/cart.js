const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const { response } = require("express");
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


app.post('/api/insert-cart/details',(req,res)=>{

    var register = {
        
        cart_id:req.body.cart_id,
        cart_c_name:req.body.cart_c_name, 
         address:req.body.address,     
         barnchers:req.body.barnchers
        
    };

    var sqlquery = "INSERT INTO cart SET ?";
    var query = con.query(sqlquery,register,(err,result)=>{
        if(err) throw err;
            res.send(JSON.stringify({"status" : 200, " response" : result}));
    });
});

app.get('/api/get-cart/details',(req,res)=>{

    var sqlquery = "SELECT * FROM cart";
    var query = con.query(sqlquery,(err,result)=>{
        res.send(JSON.stringify({"status" : 200,"response":result }));
    });
});

app.get('/api/get-cart/details/:id',(req,res)=>{

    var sqlquery = "SELECT * FROM cart where cart_id = ?";
    var query = con.query(sqlquery,[req.params.id],(err,result)=>{
        res.send(JSON.stringify({"status" : 200,"response":result }));
    });
});

app.put('/api/edit-cart-name/:id',(req,res)=>{
    const sqlquery = "UPDATE cart SET cart_c_name = '"+req.body.cart_c_name +"'where cart_id =?" ;
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
           res.send(JSON.stringify({"status" : 200, " response" : result}));
        
    });
});

app.put('/api/edit-cart-address/:id',(req,res)=>{
    const sqlquery = "UPDATE cart SET  address = '"+req.body.address +"'where cart_id =?" ;
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
           res.send(JSON.stringify({"status" : 200, " response" : result}));
        
    });
});


app.put('/api/edit-cart-address/:id',(req,res)=>{
    const sqlquery = "UPDATE cart SET barnchers = '"+req.body.barnchers +"'where cart_id =?" ;
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
           res.send(JSON.stringify({"status" : 200, " response" : result}));
        
    });
});

app.delete('/api/delete-cart/:id',(req,res)=>{
    const sqlquery = "delete from cart where cart_id =? ";
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
        res.send(JSON.stringify({"status" : 200, " response" : result}));
     
 });
});


app.listen(5000,()=>{
    console.log("server started....");
});