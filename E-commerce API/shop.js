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


// shop table 


app.post('/api/register-datainsert',(req,res)=>{

    var register = {
        S_id: req.body.S_id,
        S_name: req.body.S_name,
        owner_id: req.body.owner_id,
        city: req.body.city,
        state: req.body.state,
        pincode: req.body.pincode,
        regis_no: req.body.regis_no,
        gst: req.body.gst,
        shop_cat_type: req.body.shop_cat_type,
        shop_address: req.body.shop_address,
        contact: req.body.contact,
        status: req.body.status
        
    };

    var sqlquery = "INSERT INTO shop SET ?";
    var query = con.query(sqlquery,register,(err,result)=>{
        if(err) throw err;
            res.send(JSON.stringify({"status" : 200, " response" : result}));
    });
});

app.get('/api/online_shopping/view-shop',(req,res)=>{
    const sqlquery = "SELECT * FROM shop";
    const query = con.query(sqlquery,(err,result)=>{
        if(err)
          throw err;
        res.send(JSON.stringify({"status": 200,"response": result}));
        
    });
});

app.get('/api/online_shopping/search-shop/:sid',(req,res)=>{
    const sqlquery = "SELECT * FROM shop where S_id = ?" ;
    const query = con.query(sqlquery,[req.params.sid],(err,result)=>{
        if(err)
          throw err;
        res.send(JSON.stringify({"status": 200,"response": result}));
        
    });
});


app.put('/api/edit-shop/:id',(req,res)=>{
    const sqlquery = "UPDATE shop SET S_name = '"+req.body.S_name +"'where S_id =?" ;
    const query = con.query(sqlquery,[+req.params.id],(err,result)=>{
        if(err)
            throw err;
           res.send(JSON.stringify({"status" : 200, " response" : result}));
        
    });
});


app.put('/api/status-change/:id',(req,res)=>{
    const sqlquery = "UPDATE shop SET status  = '" +req.body.status+"' where S_id = ?";
    const query = con.query(sqlquery,[ req.params.id],(err,result)=>{
        if(err)
            throw err;
          res.send(JSON.stringify({"status" : 200, " response" : result}));
        
    });
});

app.listen(5550,()=>{
    console.log("server start....");
});