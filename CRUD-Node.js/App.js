const { query } = require("express");
const express = require("express");
const app = express();
const mysql = require("./connection").con



//configuration
app.set("view engine","hbs");
app.set("views","./view")
app.use(express.static(__dirname +"/public"))

// app.use(express.urlencoded())
// app.use(express.json())

//routing

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/add',(req,res)=>{
    res.render('add')
})

app.get('/search',(req,res)=>{
    res.render('search')
})

app.get('/update',(req,res)=>{
    res.render('update')
})

app.get('/delete',(req,res)=>{
    res.render('delete')
})

app.get('/view',(req,res)=>{
    let qury4 = "select * from studentinfo";
    mysql.query(qury4,(err,result)=>{
        if(err)throw err
        else{
            res.render("view",{data:result});
        }
    })
})


app.listen(5000,(err)=>{
    if(err){
         console.log(err);
    }else{
         console.log("server start");
    }
})

app.get("/alldata",(req,res)=>{
    let query3 = "select * from studentinfo ";
    mysql.query(query3,(err,result)=>{
   if(err)
   throw err
   else {
       
   }    })
})

app.get("/addstudent",(req,res)=>{
    //fetching...
    const {name,phone_no,email,gender,Address} = req.query

    //senitization
    let query = "select * from studentinfo where phone_no=?";
    mysql.query(query,[phone_no],(err,result)=>{
        if(err)
        throw err
        else{
           if (result.length > 0){
             res.render("add",{checkmesg:true})
           }else{
               //insert 
               let Query1 = "insert into studentinfo values(?,?,?,?,?)";
               mysql.query(Query1,[name,phone_no,email,gender,Address],(err,results)=>{
                   res.render("add",{mesg:true})
               })
           }
        }
    })
});

// app.post('/searchstudent',(req,res)=>{
//     //res.send("manager post res")
//     res.send(req.body)
// })

app.get("/searchstudent",(req,res)=>{
    // fetch data from the form
    const {phone_no} = req.query;

    let qry = "select *  from studentinfo  where phone_no=?";
    mysql.query(qry,[phone_no],(err,result)=>{
              if(err) throw err;
              else{
                        if(result.length > 0){
                           res.render("search", {mesg1: true, mesg2: false})
                           console.warn(result);
                        }
                        else{
                            res.render("search",{mesg1: false, mesg2: true})
                        }
           
              }
    })
})

app.get("/deletestudent",(req,res)=>{

    const{phone_no} =req.query;

    let qry = "DELETE from studentinfo where phone_no =?";
    mysql.query(qry,[phone_no],(err,results)=>{
        if(err)throw err
        else{
            if(results.length > 0){
                res.render("DELETE",{mesg3:true,mesg4:false})
            }else{
                res.render("DELETE",{mesg3:false,mesg4:true})
            }
        }
    })
})

app.get("/updatesearch",(req,res)=>{
    const {phone_no} = req.query;
    let qry = "select * from studentinfo where phone_no=?";
    mysql.query(qry,[phone_no],(err,result)=>{
              if(err) throw err;
              else{
                        if(result.length > 0){
                           res.render("update", {mesg1: true, mesg2: false,data:result})
                        }
                        else{
                            res.render("update",{mesg1: false, mesg2: true})
                        }
              }
    })
})


app.get("/updatestudent", (req,res)=>{
    // fetch data
    const {name,phone_no,gender} = req.query;
    let qry = "update studentinfo set name=? where phone_no=?";
    mysql.query(qry, [name, phone_no,gender], (err,result)=>{
              if(err) throw err;
              else{
                        if(result.affectedRows > 0){
                                  res.render("update",{ umesg : true})
                        }
              }
    })
})


