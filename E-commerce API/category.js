const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const req = require("express/lib/request");

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

app.post('/api/insert-category',(req,res)=>{

    var register = {
         cat_id:req.body.cat_id, 
         cat_type:req.body.cat_type, 
         cat_name:req.body.cat_name
    } 
    const sqlquery = "insert into category set ?";
    const query = con.query(sqlquery,register,(err,result)=>{
        res.send(JSON.stringify({"status": 200, "response":result}));
    });
});

app.get('/api/get-category/details',(req,res)=>{

    var sqlquery = "SELECT * FROM category";
    var query = con.query(sqlquery,(err,result)=>{
        res.send(JSON.stringify({"status" : 200,"response":result }));
    });
});

app.get('/api/get-category/details/:id',(req,res)=>{

    var sqlquery = "SELECT * FROM category where cat_id = ?";
    var query = con.query(sqlquery,[req.params.id],(err,result)=>{
        res.send(JSON.stringify({"status" : 200,"response":result }));
    });
});

app.put('/api/edit-cat-type/:id',(req,res)=>{
    const sqlquery = "UPDATE category SET cat_type = '"+req.body.cat_type +"'where cat_id =?" ;
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
           res.send(JSON.stringify({"status" : 200, " response" : result}));
        
    });
});

app.put('/api/edit-cat-name/:id',(req,res)=>{
    const sqlquery = "UPDATE category SET cat_name = '"+req.body.cat_name +"'where cat_id =?" ;
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
           res.send(JSON.stringify({"status" : 200, " response" : result}));
        
    });
});

app.delete('/api/delete-category/:id',(req,res)=>{
    const sqlquery = "delete from category where cat_id =? ";
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
        res.send(JSON.stringify({"status" : 200, " response" : result}));
     
 });
});

app.listen(5000,()=>{
    console.log("server started....");
});
