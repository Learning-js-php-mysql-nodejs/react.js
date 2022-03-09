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

app.post('/api/insert-feedback',(req,res)=>{

    var register = {
        cust_id:req.body.cust_id, 
        rating:req.body.rating, 
        comments:req.body.comments
    } 
    const sqlquery = "insert into feedback set ?";
    const query = con.query(sqlquery,register,(err,result)=>{
        res.send(JSON.stringify({"status": 200, "response":result}));
    });
});


app.get('/api/get-feedback/details',(req,res)=>{

    var sqlquery = "SELECT * FROM feedback";
    var query = con.query(sqlquery,(err,result)=>{
        res.send(JSON.stringify({"status" : 200,"response":result }));
    });
});

app.get('/api/get-feedback/details/:id',(req,res)=>{

    var sqlquery = "SELECT * FROM feedback where cust_id = ?";
    var query = con.query(sqlquery,[req.params.id],(err,result)=>{
        res.send(JSON.stringify({"status" : 200,"response":result }));
    });
});

app.put('/api/edit-ratinng/:id',(req,res)=>{
    const sqlquery = "UPDATE feedback SET rating = '"+req.body.rating +"'where cust_id =?" ;
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
           res.send(JSON.stringify({"status" : 200, " response" : result}));
        
    });
});

app.put('/api/edit-comment/:id',(req,res)=>{
    const sqlquery = "UPDATE feedback SET comments = '"+req.body.comments+"'where cust_id =?" ;
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
           res.send(JSON.stringify({"status" : 200, " response" : result}));
        
    });
});

app.delete('/api/delete-feedback/:id',(req,res)=>{
    const sqlquery = "delete from feedback where cust_id =? ";
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
        res.send(JSON.stringify({"status" : 200, " response" : result}));
     
 });
});

app.listen(5000,()=>{
    console.log("server started....");
});
