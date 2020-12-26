const mongoose =require('mongoose')
const Schema= mongoose.Schema

const Login= new Schema(
    {
   email_id : {type:String},
   password : {type:String}
},
)

module.exports=mongoose.model('login',Login)