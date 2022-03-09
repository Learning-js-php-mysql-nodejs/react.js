var express = require('express');
var mysql = require('mysql');
var bodypersar = require('body-parser');


var app = express();
app.use(bodypersar.json);

let con = mysql.createConnection({
    host: 'localhost',
    user: 'virendra',
    password: '12345',
    port: 3306,
    database: 'virendra'

});

con.connect(function(err){
    if(err){
        console.log(err.message);
    }else{
        console.log("connection...");
    }
});

app.post('/api/personal/create-new',function(req,res){

    var personaldata = {

        id: req.body.id,
       name:req.body.name,
       age:req.body.age,
       gender:req.body.gender,
       phone:req.body.phone,
       city:req.body.city
    };

    let sqlquery = "INSERT INTO personal SET ?";
    let Query = con.Query(sqlquery,personaldata,function(err,res)
    {
        if(err)throw err;
        res.send(JSON.stringify({"status":200,"response":result}));
    });
});

app.listen(5000,()=>{
    console.log("server response");
});

