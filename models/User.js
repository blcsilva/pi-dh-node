require("express");
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
mongoose.Promise = global.Promise;


const userSchema = mongoose.Schema({
    email: { type: String, unique: true },
    nome: { type: String },
    sobrenome: {type: String},
    adress: { type: String},
    adress2: { type: String},
    cidade: { type: String},
    estado: {type: String},
    cep: {type: String},
    resetPasswordToken: { type: String},
    resetPasswordExpires:{ type: Date},
    confirmation_code: String,
    isVerified: { type: Boolean, default: false },

   
}, { timestamps: true });

userSchema.plugin(passportLocalMongoose, {usernameField:'email'});

module.exports = mongoose.model('User', userSchema);