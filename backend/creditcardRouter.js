var payCardController=require('./creditcardController');
var express=require('express');
var router=express.Router();

//add data
router.post('/',function(req,res){
    creditcardController.insert(req.body).then(function(data){
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

module.exports=router;