const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

var app = express(); 

app.use(bodyParser.json());
app.use(cors())

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

app.post('/api/insert-employee',(req,res)=>{

    var register = {
        Eid :req.body.Eid  , 
        Emp_name:req.body.Emp_name,
        Mobile:req.body.Mobile,
        city:req.body.city,
        address:req.body.address,
        joiningDate:req.body.joiningDate

    } 
    const sqlquery = "insert into employee set ?";
    const query = con.query(sqlquery,register,(err,result)=>{

        res.send(JSON.stringify({"status": 200, "response":result}));
    });
});

app.get('/api/get-employee/details',(req,res)=>{

    var sqlquery = "SELECT * FROM employee";
    var query = con.query(sqlquery,(err,result)=>{
        res.send(JSON.stringify({"status" : 200,"response":result }));
    });
});

app.get('/api/get-employee/detail/:id',(req,res)=>{

    var sqlquery = "SELECT * FROM employee where Eid = ?";
    var query = con.query(sqlquery,[req.params.id],(err,result)=>{
        res.send(JSON.stringify({"status" : 200,"response":result }));
    });
});


app.put('/api/edit-employee-name/:id',(req,res)=>{
    const sqlquery = "UPDATE employee SET Emp_name  = '"+req.body.Emp_name +"' where Eid =?" ;
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
           res.send(JSON.stringify({"status" : 200, "response" : result}));
        
    });
});

app.put('/api/edit-employee-mobile/:id',(req,res)=>{
    const sqlquery = "UPDATE employee SET Mobile  = '"+req.body.Mobile +"' where Eid =?" ;
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
           res.send(JSON.stringify({"status" : 200, "response" : result}));
        
    });
});

app.put('/api/edit-employee-city/:id',(req,res)=>{
    const sqlquery = "UPDATE employee SET city  = '"+req.body.city +"' where Eid =?" ;
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
           res.send(JSON.stringify({"status" : 200, "response" : result}));
        
    });
});

app.put('/api/edit-employee-address/:id',(req,res)=>{
    const sqlquery = "UPDATE employee SET address  = '"+req.body.address +"'where Eid =?" ;
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
           res.send(JSON.stringify({"status" : 200, "response" : result}));
    });
});

app.delete('/api/edit-employee-delete/:id',(req,res)=>{
    const sqlquery = "DELETE FROM employee where Eid =?" ;
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
           res.send(JSON.stringify({"status" : 200, "response" : result}));
        
    });
});

app.get('/api/emp-desi',(req,res)=>{
    const sqlquery = "SELECT * From employee NATURAL JOIN designation" ;
    const query = con.query(sqlquery,(err,result)=>{
        res.send(JSON.stringify({"status" : 200, "response" : result}));
    })
})

app.delete('/api/emp-desi-delete/:id',(req,res)=>{
    const sqlquery = "delete From employee NATURAL JOIN designation where Eid =?" ;
    const query = con.query(sqlquery,[+req.params.id],(err,result)=>{
        res.send(JSON.stringify({"status" : 200, "response" : result}));
    })
})

app.put('/api/:id',(req,res)=>{
    const sqlquery = "update employee set Emp_name = '"+req.body.Emp_name+"', Mobile ='"+req.body.Mobile+"',address ='"+req.body.address+"' where Eid = ?";
    const query = con.query(sqlquery,[+req.params.id],(err,result)=>{
        res.send(JSON.stringify({"status":200,"response":result}));

    });
});

app.listen(2000,()=>{
    console.log("server started....");
});