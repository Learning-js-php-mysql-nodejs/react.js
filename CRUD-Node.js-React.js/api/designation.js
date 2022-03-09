const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

var app = express();

app.use(bodyParser.json());
app.use(cors());

let con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password :"", 
    port: 3306,
    database: "project_1"
});


con.connect((err)=>{
    if(err)
    console.log(err.message);
    else
    console.log("connected succesfully");
});

app.post('/api/insert-desi',(req,res)=>{

    var register = {
        Eid:req.body.Eid, 
        Dasignation:req.body.Dasignation,
        Department:req.body.Department
    } 
    const sqlquery = "insert into designation set ?";
    const query = con.query(sqlquery,register,(err,result)=>{
        res.send(JSON.stringify({"status" : 200, "response":result}));
    });
});

app.get('/api/get-desig/details',(req,res)=>{

    var sqlquery = "SELECT * FROM designation";
    var query = con.query(sqlquery,(err,result)=>{
        res.send(JSON.stringify({"status" : 200,"response":result }));
    });
});

app.get('/api/get-designation/detail/:id',(req,res)=>{

    var sqlquery = "SELECT * FROM designation where Eid = ?";
    var query = con.query(sqlquery,[req.params.id],(err,result)=>{
        res.send(JSON.stringify({"status" : 200,"response":result }));
    });
});

app.put('/api/edit-employee-designation/:id',(req,res)=>{
    const sqlquery = "UPDATE designation SET Dasignation  = '"+req.body.Dasignation +"'where Eid =?" ;
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
           res.send(JSON.stringify({"status" : 200, "response" : result}));
        
    });
});

app.put('/api/edit-employee-department/:id',(req,res)=>{
    const sqlquery = "UPDATE designation  SET  department  = '"+req.body. department +"'where Eid =?" ;
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
           res.send(JSON.stringify({"status" : 200, "response" : result}));
        
    });
});

app.delete('/api/edit-desig-delete/:id',(req,res)=>{
    const sqlquery = "DELETE FROM designation where Eid =?" ;
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
           res.send(JSON.stringify({"status" : 200, "response" : result}));
        
    });
});



app.listen(1000,()=>{
    console.log("server started....");
});