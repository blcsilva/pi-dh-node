const { Usuario} = require('../models');
const Usuarios = require('../models/Usuarios');
const bcrypt = require('bcrypt');


const cadastro= (req, res) => {
    res.render('cadastro');
  };



 const cadastroEfetuado= async (req,res,next) => {


      const dados = req.body;
      var email = dados.email;
      var senha = dados.senha;

      const userExists = await Usuario.findOne({ where: { email: req.body.email } });
      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }

            
   await Usuario.create({id:null,email,senha})
   .then(()=>{
   
    
            res.redirect('/login')
        }).catch(function(erro){
            res.send("Erro: Usuário não cadastrado!" + erro)
        })
        
    }

module.exports ={
    cadastro ,cadastroEfetuado
};

 

