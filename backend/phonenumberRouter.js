var payDialogController=require('./phonenumberController');
var express=require('express');
var router=express.Router();

//insert
router.post('/',function(req,res){
    phonenumberController.insert(req.body).then(function(data){
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

module.exports=router;

