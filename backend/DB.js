var mongoose=require('mongoose');
var schema=mongoose.Schema;

//User items
var user=new schema({
    name: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    NoOfTickets: {
        type: String,
        required: true
    },

    paymentMethod: {
        type: String,
        required: true
    },
})
    var creditcard=new schema({
        email:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        cardNumber:{
            type:String,
            required:true
        },
        cvc:{
            type:String,
            required:true
        },
        amount:{
            type:String,
            required:true
        },


    })
var phonenumber=new schema({
    Number:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    pin:{
        type:String,
        required:true
    },

})
//renaming schemas
mongoose.model('user',user);
mongoose.model('phonenumber',phonenumber);
mongoose.model('creditcard',creditcard);

//connecting to mongodb and creates a database called TicketBooking

mongoose.connect('mongodb://127.0.0.1:27017/TicketBooking',function (err) {
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log("Connected to the db");

})
module.exports=mongoose;

