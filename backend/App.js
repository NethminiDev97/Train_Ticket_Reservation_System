const express=require('express');
const BodyParser=require('body-parser');

const cors=require('cors');
var mongoose=require('mongoose');
var routes=require("./routes");
const app=express();

app.use(BodyParser.unlencoded({extended:false}));
app.use((BodyParser.json()));
app.use(cors());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,contenttype');
    res.setHeader('Access-Control-Allow-Credentials',true);
    next();
})

//route all requests to the routes.js file
app.use('/',routes);
//backenc server is listing to the 3001

app.listen(3000,()=>{
    console.log("server listening to port 3001");
})