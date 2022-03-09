
const express = require('express');
const Razorpay = require('razorpay');

let app = express();


const razorpay =new Razorpay({ 
    key_id :'rzp_test_dJ4dhFb6FH8vdX',
    key_secret :'zoy2Vk8dJdGmalVTb5gAXiGE'}
)

app.set('views','views')
app.set ('view engine','ejs')
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.render('razorpay.ejs')
})

app.post('/order',(req,res)=>{
    let options={
  amount: 50000,
  currency: "INR"
}

razorpay.orders.create(options,(err,order)=>{

    console.log(order)
    res.json(order)
})
})

app.post('/is-order-completed',(req,res)=>{
razorpay.payments.fetch(req.body.razorpay_payment_id).then((paymentDocument)=>{
   if(paymentDocument.status == "captured"){
       res.send("payment succesfull")
   } else{
       res.render("/");
   }
})

})



app.listen(5000 ,(err,result)=>{
    if(err){
        throw err
    }
    else{
        console.log("server is running");
    }
});