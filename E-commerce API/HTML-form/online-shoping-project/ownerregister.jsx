import app from "./app";
const express = require("express");
const mysql = require("mysql");
const bodyparser = require("body-parser");

var app =express();

app.use(bodyparser.json());

function ownerregister(){
    return(
      <div>
          <h1> owner registration</h1>
      <lable>Owner id</lable>
      <input type = "text" placeholder ="eg. 01"></input><br />
      <lable>Owner name</lable>
      <input type = "text" placeholder ="eg. virendra"></input><br />
      <lable> addhar no</lable>
      <input type = "number" placeholder ="eg. 123456789123"></input><br />
      <lable>pan card</lable>
      <input type = "text" placeholder ="eg. ANUP123456"></input><br />
      <lable>mobile no.</lable>
      <input type = "text" placeholder ="eg. 123456789"></input><br />
      <lable>Email</lable>
      <input type = "email" placeholder ="eg. abc@gmail.com"></input><br />

      </div>
    );
}

export default ownerregister;

app.listen(5000,()=>{
    console.log("server running...");
})