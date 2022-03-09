const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const req = require("express/lib/request");
const { send } = require("express/lib/response");

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

app.post('/api/insert/branch',(req,res)=>{
    var register = {
        cart_id:req.body.cart_id,           
        states:req.body.states,            
        city :req.body.city,             
        branch_add :req.body.branch_add,        
        branch_contract:req.body.branch_contract,   
        branch_mail :req.body.branch_mail,       
        branch_manage_name:req.body.branch_manage_name,
        branch_manage_no:req.body.branch_manage_no
    }

    const sqlquery = "insert into cart_branches set ?";
    const query = con.query(sqlquery,register,(err,result)=>{
        res.send(JSON.stringify({"status": 200, "response":result}));
    });
});

app.get('/api/get-branch/details',(req,res)=>{

    var sqlquery = "SELECT * FROM cart_branches";
    var query = con.query(sqlquery,(err,result)=>{
        res.send(JSON.stringify({"status" : 200,"response":result }));
    });
});

app.get('/api/get-branch/details/:id',(req,res)=>{

    var sqlquery = "SELECT * FROM cart_branches where cart_id = ?";
    var query = con.query(sqlquery,[req.params.id],(err,result)=>{
        res.send(JSON.stringify({"status" : 200,"response":result }));
    });
});

app.put('/api/edit-branch-status/:id',(req,res)=>{
    const sqlquery = "UPDATE cart_branches SET states = '"+req.body.states +"'where cart_id =?" ;
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
           res.send(JSON.stringify({"status" : 200, " response" : result}));
        
    });
});

app.put('/api/edit-contract/:id',(req,res)=>{
    const sqlquery = "UPDATE cart_branches SET  branch_contract = '"+req.body. branch_contract +"'where cart_id =?" ;
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
           res.send(JSON.stringify({"status" : 200, " response" : result}));
        
    });
});


app.put('/api/edit-mail/:id',(req,res)=>{
    const sqlquery = "UPDATE cart_branches SET branch_mail = '"+req.body.branch_mail +"'where cart_id =?" ;
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
           res.send(JSON.stringify({"status" : 200, " response" : result}));
        
    });
});

app.put('/api/edit-manage-name/:id',(req,res)=>{
    const sqlquery = "UPDATE cart_branches SET branch_manage_name = '"+req.body.branch_manage_name +"'where cart_id =?" ;
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
           res.send(JSON.stringify({"status" : 200, " response" : result}));
        
    });
});

app.put('/api/edit-manage_no/:id',(req,res)=>{
    const sqlquery = "UPDATE cart_branches SET branch_manage_no = '"+req.body.branch_manage_no +"'where cart_id =?" ;
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
           res.send(JSON.stringify({"status" : 200, " response" : result}));
        
    });
});

app.delete('/api/delete-branch/:id',(req,res)=>{
    const sqlquery = "delete from cart_branches where cart_id =? ";
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
        res.send(JSON.stringify({"status" : 200, " response" : result}));
     
 });
});

app.listen(5000,()=>{
    console.log("server started....");
});