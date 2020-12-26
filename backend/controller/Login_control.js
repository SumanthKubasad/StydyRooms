const Login=require('../Models/Login_model')

const { MongoClient } = require("mongodb");
const { collection } = require('../Models/Login_model');
const uri ="mongodb+srv://User_sree:hsrpqwert1@cluster0.zodxr.mongodb.net/w=majority"
const client = new MongoClient(uri,{useUnifiedTopology:true})
client.connect();

  SignUp = (req,res) =>{
    const body =req.body
   if(!body){
       return res.status(400).json({
           success:false,
           error: 'Email id or password not available'
       })
    }
    const sign = new Login(body)

    if(!sign){
        return res .status(400).json({success:false,err})
    }
    
    const doc = sign;

    run().catch(console.dir);
    
    async function run(){
    try {
        const database = client.db("Email_IDS");
    const collection = database.collection("email");
        const result = await collection.insertOne(doc);
        console.log(
          `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
        );
      } finally {
        return  res.status(200).json({success:true,})
     }
    } 
  }  

  LoginID = (req,res) => {
    const body =req.body
    if(!body){
     return res.status(400).json({
        success:false,
        error: 'Email id or password not available'
    })
     }
     
     run().catch(console.dir);
     console.log(body)

    async function run()
    {
      try {
     const database = client.db("Email_IDS");
     const collection = database.collection("email");
     var result = await collection.findOne(body )
     console.log(result) 
       } 
   finally {
       if(result){
     return  res.status(200).json({success:true,})}
     else{
       return res.status(400).json({success:false,error:'Email or password is incorrect'})
     }

  }
}
}

module.exports = {
    SignUp,
    LoginID,
  }