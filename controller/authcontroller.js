const passport = require('passport');
const bcrypt = require('bcrypt');
const Usuarios = require('../models/Usuarios');
const login = (req, res)=> {
 

res.render('login');
 
}



  
const loginAction = (req,res,next) => {

passport.authenticate("local",{

successRedirect: "/",
failureRedirect: "/login",
failureFlash: true

}),(req,res,next)

  

  res.render('/dashboard') 


}

   


  module.exports ={login,loginAction}