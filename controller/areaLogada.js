const mongoose = require('mongoose');
const User = require('../models/User');
const crypto = require('crypto');
const { listIndexes } = require('../models/User');
require('dotenv').config({path:'variables.env'});


const interno= (req, res) => {
    res.render('dashboard');
  }

module.exports ={
    interno
}