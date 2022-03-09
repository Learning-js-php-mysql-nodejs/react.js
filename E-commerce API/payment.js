const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

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

app.post('/api/insert-payment',(req,res)=>{

    var register = {
        pay_id:req.body.pay_id , 
        payment_type:req.body.payment_type ,
        or_id:req.body.or_id , 
        p_id:req.body.p_id 
    } 
    const sqlquery = "insert into payment set ?";
    const query = con.query(sqlquery,register,(err,result)=>{
        res.send(JSON.stringify({"status": 200, "response":result}));
    });
});

app.get('/api/get-payment/details',(req,res)=>{

    var sqlquery = "SELECT * FROM payment";
    var query = con.query(sqlquery,(err,result)=>{
        res.send(JSON.stringify({"status" : 200,"response":result }));
    });
});

app.get('/api/get-payment/details/:id',(req,res)=>{

    var sqlquery = "SELECT * FROM payment where pay_id = ?";
    var query = con.query(sqlquery,[req.params.id],(err,result)=>{
        res.send(JSON.stringify({"status" : 200,"response":result }));
    });
});


app.put('/api/edit-payment/:id',(req,res)=>{
    const sqlquery = "UPDATE payment SET payment_type  = '"+req.body.payment_type +"'where pay_id =?" ;
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
           res.send(JSON.stringify({"status" : 200, " response" : result}));
        
    });
});

app.delete('/api/delete-payment/:id',(req,res)=>{
    const sqlquery = "delete from payment where pay_id =? ";
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
        res.send(JSON.stringify({"status" : 200, " response" : result}));
     
 });
});

app.listen(5000,()=>{
    console.log("server started....");
});