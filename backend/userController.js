var mongoose=require('./DB');
var schema=mongoose.model('user');

var userController=function() {
    this.insert = function (data) {
        return new Promise(function (resolve, reject) {
            var user = schema({
                name: data.name,
                destination: data.destination,
                password: data.password,
                email: data.email,
                NoOfTickets: data.NoOfTickets,
                paymentMethod: data.paymentMethod,
                loyaltypoints: 0
            })
            user.save().then(function () {
                resolve({status: 200, message: "Added a new user"})
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })


    }
    //retrieve all data
    this.get = () => {
        return new Promise((resolve, reject) => {


            schema.find().sort({random: 1}).limit(1).exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    //get one method to retrieve data of specified user based on the email and password
    this.getOne = (email, password) => {
        return new Promise((resolve, reject) => {
            schema.find({email: email, password: password}).exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    //check whether the email entered during the sign up has been already taken
    this.checkEmail = (email) => {
        return new Promise((resolve, reject) => {
            schema.find({email: email}).exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.deleteOne = (id) => {
        return new Promise((resolve, reject) => {
            schema.remove({_id: id}).exec().then((data) => {
                resolve({status: 200, message: "Deleted"});

            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

}
module.exports=new userController();



