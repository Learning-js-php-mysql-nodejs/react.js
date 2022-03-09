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

app.post('/api/insert-offer',(req,res)=>{

    var register = {
        offer_id :req.body.offer_id , 
        discount_ :req.body.discount_ ,
        upto :req.body. upto , 
        offer_till:req.body.offer_till ,
        c_id  :req.body.c_id  ,
        p_id:req.body.p_id ,
        price:req.body.price ,
        after_dis:req.body.after_dis 
    } 
    const sqlquery = "insert into offer set ?";
    const query = con.query(sqlquery,register,(err,result)=>{
        res.send(JSON.stringify({"status": 200, "response":result}));
    });
});


app.get('/api/get-offer/details',(req,res)=>{

    var sqlquery = "SELECT * FROM offer";
    var query = con.query(sqlquery,(err,result)=>{
        res.send(JSON.stringify({"status" : 200,"response":result }));
    });
});

app.get('/api/get-offer/details/:id',(req,res)=>{

    var sqlquery = "SELECT * FROM offer where offer_id = ?";
    var query = con.query(sqlquery,[req.params.id],(err,result)=>{
        res.send(JSON.stringify({"status" : 200,"response":result }));
    });
});


app.put('/api/edit-discount/:id',(req,res)=>{
    const sqlquery = "UPDATE offer SET discount_  = '"+req.body.states +"'where offer_id =?" ;
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
           res.send(JSON.stringify({"status" : 200, " response" : result}));
        
    });
});

app.put('/api/edit-upto/:id',(req,res)=>{
    const sqlquery = "UPDATE offer SET upto = '"+req.body.upto +"'where offer_id =?" ;
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
           res.send(JSON.stringify({"status" : 200, " response" : result}));
        
    });
});


app.put('/api/edit-offer-till/:id',(req,res)=>{
    const sqlquery = "UPDATE offer SET offer_till = '"+req.body.offer_till +"'where offer_id =?" ;
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
           res.send(JSON.stringify({"status" : 200, " response" : result}));
        
    });
});

app.put('/api/edit-price/:id',(req,res)=>{
    const sqlquery = "UPDATE offer SET price = '"+req.body.price +"'where offer_id =?" ;
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
           res.send(JSON.stringify({"status" : 200, " response" : result}));
        
    });
});

app.put('/api/edit-after_dis/:id',(req,res)=>{
    const sqlquery = "UPDATE offer SET after_dis = '"+req.body.after_dis +"'where offer_id =?" ;
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
           res.send(JSON.stringify({"status" : 200, " response" : result}));
        
    });
});

app.delete('/api/delete-offer/:id',(req,res)=>{
    const sqlquery = "delete from offer where offer_id =? ";
    const query = con.query(sqlquery,[req.params.id],(err,result)=>{
        res.send(JSON.stringify({"status" : 200, " response" : result}));
     
 });
});

app.listen(5000,()=>{
    console.log("server started....");
});
