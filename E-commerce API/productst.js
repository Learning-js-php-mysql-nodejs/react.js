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

// product_available

app.post('/api/create-stock',(req,res)=>{

    var register = {
        p_id:req.body.p_id,
        c_id:req.body.c_id,
        s_id:req.body.s_id,
        QTY:req.body.QTY
    };

    var sqlquery = "INSERT INTO product_available SET ?";
    var query = con.query(sqlquery,register,(err,result)=>{
        if(err)
            throw err;
           res.send(JSON.stringify({"status":200,"data":result}));
    });
});

app.get('/api/view-stock/:id',(req,res)=>{
    const sqlquery = "SELECT * FROM product_available where s_id = " +req.params.id;
    const query = con.query(sqlquery,(err,result)=>{
        if(err)
            throw err;
         res.send(JSON.stringify({"status":200,"data":result}));
    });
});

app.get('/api/show-product-ab',(req,res)=>{
    let sqlquery = "SELECT * FROM product_available";
    let query = con.query(sqlquery,(err,result)=>{
        if(err) throw err;
        res.send(JSON.stringify({"status":200,"response":result}));
    });
 });
 
app.put('/api/edit-stock/:id',(req,res)=>{
    const sqlquery = "UPDATE product_available set QTY =" +req.body.QTY+ "where s_id = " +req.params.id;
    const query = con.query(sqlquery,(err,result)=>{
        if(err)
            throw err;
         res.send(JSON.stringify({"status":200,"data":result}));
    });
});

app.listen(4000,()=>{
    console.log("server start...");
});