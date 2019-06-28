var mongoose=require('./DB');
var schema=mongoose.model('creditcard');
const nodemailer = require('nodemailer');

var creditcardController=function () {
    //insert data when called by the creditcardRouter

    this.insert=function(data) {
        return new Promise(function (resolve, reject) {
            var card = schema({
                email: data.email,
                name: data.name,
                cardNumber: data.cardNumber,
                cvc: data.cvc,
                amount: data.amount,

            })
            card.save().then(function () {
                resolve({status: 200, message: "Added card info"})
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    }
    module.exports=new creditcardController();