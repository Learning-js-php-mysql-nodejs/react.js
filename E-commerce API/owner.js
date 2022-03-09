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


app.post('/api/online_shopping/reset_owner',function(req,res){

    var register = {
        Owner_id:req.body.Owner_id,
        Owner_name:req.body.Owner_name,
        Own_aadhar:req.body.Own_aadhar,
        Own_pan_no:req.body.Own_pan_no,
        Own_mobile_no:req.body.Own_mobile_no,
        Own_mail_id:req.body.Own_mail_id
    
    };

    let sqlquery = "INSERT INTO owner SET ?";
    let query = con.query(sqlquery,register,function(err,result){
        if(err) throw err;
        res.send(JSON.stringify({"status" : 200, " response" : result}));
        
 });
});

app.get('/api/online_shop/view-owner/all-owner',(req,res)=>{

    const sqlquery = "SELECT * FROM owner";
    const query = con.query(sqlquery,(err,result)=>{
        if(err) throw err;
         res.send(JSON.stringify({"status" : 200, " response" : result}));
    });
});


app.get('/api/search-owner/:id',(req,res)=>{

    const sqlquery = "SELECT * FROM owner where Owner_id =? ";
    const query = con.query(sqlquery,[req.params.id], (err,result)=>{
        if(err)
           throw err;
           res.send(JSON.stringify({"status" : 200, " response" : result}));
        
    });
});

app.put('/api/update-owner/:id',(req,res)=>{


    const sqlquery = "UPDATE owner SET Owner_name ='" +req.body.Owner_name + "'where Owner_id =?" ;
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
        if(err)
            throw err;
        
            res.send(JSON.stringify({"status" : 200, " response" : result}));
        
    });
});

app.delete('/api/delete/owner/:id',(req,res)=>{

    const sqlquery = "DELETE From owner where Owner_id =" +req.params.id;
    const query = con.query(sqlquery,(err,result)=>{
        if(err) throw err;
          res.send(JSON.stringify({"status" : 200, " response" : result}));
        
    });
});

app.listen(4440,()=>{
    console.log("server start...");
});