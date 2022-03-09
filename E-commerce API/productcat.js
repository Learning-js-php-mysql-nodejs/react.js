const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const { response } = require("express");

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

app.post('/api/insert-product',(req,res)=>{

    var register = {
        p_id: req.body.p_id,
        p_name: req.body.p_name,
        p_type: req.body.p_type,
        c_id: req.body.c_id,
        company_name: req.body.company_name
    };

    var sqlquery = "INSERT INTO product SET ?";
    var query = con.query(sqlquery,register,(err,result)=>{
        if(err)throw err;
            res.send(JSON.stringify({"status":200,"data":result}));
    });
});

app.get('/api/show-product',(req,res)=>{
   let sqlquery = "SELECT * FROM product";
   let query = con.query(sqlquery,(err,result)=>{
       if(err) throw err;
       res.send(JSON.stringify({"status":200,"response":result}));
   });
});

app.put('/api/edit-cat/:id',(req,res)=>{
    const sqlquery = "UPDATE product set p_name = '" + req.body.p_name + "' where p_id = ?";
    const query = con.query(sqlquery, [req.params.id], (err,result)=>{
        if(err)
            throw err;
            res.send(JSON.stringify({"status":200,"data":result}));
    });
});

app.get('/api/product/search/:id',(req,res)=>{
    const sqlquery = "SELECT * FROM product where p_id = ? ";
    const query = con.query(sqlquery,[ req.params.id],(err,result)=>{
        if(err)
            throw err;
         res.send(JSON.stringify({"status":200,"data":result}));
        
    });
});

app.get('/api/view-product/',(req,res)=>{
    const sqlquery = "SELECT * FROM product ";
    const query = con.query(sqlquery,(err,result)=>{
        if(err)
            throw err;
            res.send(JSON.stringify({"status":200,"data":result})); 
    });
});


app.delete('/api/delete-cat/:id',(req,res)=>{
    const sqlquery = "DELETE FROM product where p_id = " +req.params.id;
    const query = con.query(sqlquery,(err,result)=>{
        if(err)
            throw err;
            res.send(JSON.stringify({"status":200,"data":result}));
    });
});


app.listen(4000,()=>{
    console.log("server start...");
});