var localStrategy = require("passport-local").Strategy;
const bcrypt = require('bcrypt');
const sequelize = require('../models/index');
const Usuarios = require('../models/Usuarios')



module.exports = function(passport){
  

    passport.use(new localStrategy({

    
    usernameField:'email',
    passwordField:'senha'


    },
    (email,senha,done)=>{

    Usuarios.findOne({email: email}).then((usuarios)=>{
    if (!usuarios){

    return done(null,false, {message: "Essa conta não existe"})

    }
    bcrypt.hashSync(senha, 10)
        bcrypt.compare(senha, usuarios.senha,(erro,batem)=>{
            if (batem){

                return done(null,usuarios)

           } else {

              return done(null,false, {message: "Senha Incorreta"})

            }

        })

     })



   }))



passport.serializeUser((usuarios,done)=>{

done(null,usuarios.id)


})

passport.deserializeUser((id,done)=>{

  Usuarios.findById(id,(err,usuarios)=>{
  done(err,usuarios)

  })


})


}

