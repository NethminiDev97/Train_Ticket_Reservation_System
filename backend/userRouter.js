var userController=require('./userController');
var express=require('express');
var router=express.Router();

//post calls the insert method in userController class to insert a new user

router.post('/',function(req,res){
    userController.insert(req.body).then(function(data){
        res.status(data.status).send({message:data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    }) });
//get all user details
router.get('/', (req, res) => {
    userController.get().then(data => {
        res.status(data.status).send(data.data);
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    }) });
//get details pf a perticular user based on name and password
 router.get('/:email/:password', (req, res) => {
   userController.getOne(req.params.password,req.params.password).then(data => {
  res.status(data.status).send(data.data);
   }).catch(err => {
   res.status(err.status).send({message: err.message});
});
 });

router.get('/:email', (req, res) => {
    userController.checkEmail(req.params.email).then(data => {
        res.status(data.status).send(data.data);
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    }); });

router.delete('/:id', (req, res) => {
    userController.deleteOne(req.params.id).then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    }); });

router.put('/:email', (req, res) => {
    userController.update(req.params.email,req.body).then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    }); });

module.exports=router;


