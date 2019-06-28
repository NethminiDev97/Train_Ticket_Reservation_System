var express=require('express');
var routes=express.Router();

//require all classes that handles routes

var user=require('./userRouter');
var phonenumber=require('./phonenumberRouter');
var creditcard=require('./creditcardRouter');

//routes the request to the specified class

routes.use('/user',user);
routes.use('/phonenumber',phonenumber);
routes.use('/credicard',creditcard);

module.exports=routes;