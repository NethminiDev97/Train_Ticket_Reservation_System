var mongoose=require('./DB');
var schema=mongoose.model('dialogpay');
const nodemailer = require('nodemailer');

var phonenumberController=function () {
    //insert data when called by the phonenumberRouter
    this.insert=function(data) {
        return new Promise(function (resolve, reject) {
            var dialogpay = schema({
                Number: data.Number,
                amount: data.amount,
                pin: data.pin,

            })
            dialogpay.save().then(function () {
                resolve({status: 200, message: "Added dialog info"})
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })

        })
    }
    }
    module.exports=new phonenumberController();