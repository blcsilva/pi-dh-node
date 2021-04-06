const {Usuario} = require('./models/')
const Usuarios = require('./models/Usuarios');
const passport = require('passport')
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport').Strategy;
const dados = (req, res)=> req.body;
const email = dados.email;
const senha = dados.senha;
const users = Usuario.findAll({email:email,
    senha:senha



});


module.exports = async function(passport){

return Usuario.findOne({ where: { email:email === email} })


function findUserById(id){

return Usuario.find(item => usuarios.id)

}

passport.serializeUser((id,done)=>{

done(null,id);

})

passport.deserializeUser((id,done)=>{

try {

    const user = findUserById(email)
    done (null,user); 



} catch {
    console.log(err);
    return (done,null)

}


})

passport.use(new localStrategy({
    usernameField:'email',
    passwordField:'senha'



},(email,senha ,done)=>{
    try {
    const user = findUser(email);

    const isValid = bcrypt.compareSync(users.senha);
    if (!isValid) return done(null,false);
    return done(null,user);

    }catch {
        console.log(err,"Usuário ou senha não encontrados"); 
        done (null,false);
        if (!user){
        return done(err,false);
        
        

        }

    }



}))

}


