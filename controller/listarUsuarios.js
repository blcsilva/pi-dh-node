const { Usuario} = require('../models');
const Usuarios = require('../models/Usuarios');
const listar= async (req, res,next) => {

    let users = await  Usuario.findAll()
    
      
    
  res.send(users.JSON);
    
  }

  

module.exports ={
    listar
}