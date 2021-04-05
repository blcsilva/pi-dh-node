const mongoose = require('mongoose');
const User = require('../models/User');
const crypto = require('crypto');
const { listIndexes } = require('../models/User');
require('dotenv').config({path:'variables.env'});


const login= (req, res) => {
    res.render('login');
  }




const loginAction = (req,res) => {
  const auth = User.authenticate();
 
  auth(req.body.email ,req.body.password ,(error,result)=>{
 
   if(!result) {
    console.log(error)
     
     res.redirect('/login');
     return;
   }
 
 
   req.login(result, ()=>{
    
 
   });
  
   res.redirect('/dashboard');
 
 
  });
 };

 module.exports ={
  loginAction ,login
}