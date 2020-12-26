const express =require('express')

const logcntrl= require('../controller/Login_control')

const router=express.Router()

router.post("/sign",logcntrl.SignUp)
router.post("/login",logcntrl.LoginID)
module.exports=router

