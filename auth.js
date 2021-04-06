var bCrypt = require('bcrypt');
var passport = require("passport");


// function to be called while there is a new sign/signup 
// We are using passport local signin/signup strategies for our app
module.exports = function (passport, auth) {
    var Auth = auth;
    
    var LocalStrategy = require('passport-local').Strategy;

    passport.use('local-signup', new LocalStrategy(
        
        {
            usernameField: 'email',
            passwordField: 'senha',
            passReqToCallback: true // allows us to pass back the entire request to the callback

        }, function (req, email, senha, done) {
            console.log("Signup for - ", email)
            var generateHash = function (senha) {
                return bCrypt.hashSync(senha, bCrypt.genSaltSync(8), null);

            }
            Auth.findOne({
                where: {
                    email: email
                }
            }).then(function (user) {
                //console.log(user);
                if (user) {
                    return done(null, false, {
                        message: 'That email is already taken'
                    });
                } else {
                    var userPassword = generateHash(senha);
                    var data = {
                        email: email,
                        senha: userPassword,
                        firstname: req.body.firstname,
                        lastname: req.body.lastname
                    };

                    Auth.create(data).then(function (newUser, created) {
                        if (!newUser) {
                            return done(null, false);
                        }
                        if (newUser) {
                            return done(null, newUser);
                        }

                    });
                    }
            });
        }
    ));

    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy(
           
        {

            // by default, local strategy uses username and password, we will override with email

            usernameField: 'email',

            passwordField: 'senha',

            passReqToCallback: true // allows us to pass back the entire request to the callback

        },


        function (req, email, senha, done) {

            var Auth = auth;

            var isValidPassword = function (userpass, senha) {

                return bCrypt.compareSync(senha, userpass);

            }
            console.log("logged to", email)
            Auth.findOne({
                where: {
                    email: email
                }
            }).then(function (user) {
                console.log(user)
                if (!user) {

                    return done(null, false, {
                        message: 'Email does not exist'
                    });

                }

                if (!isValidPassword(user.senha, senha)) {

                    return done(null, false, {
                        message: 'Incorrect password.'
                    });

                }


                var userinfo = user.get();
                return done(null, userinfo);


            }).catch(function (err) {

                console.log("Error:", err);

                return done(null, false, {
                    message: 'Something went wrong with your Signin'
                });

            });


        }

    ));

    //serialize
    passport.serializeUser(function (auth, done) {

        done(null, auth.id);

    });

    // deserialize user 
    passport.deserializeUser(function (id, done) {

        Auth.findById(id).then(function (user) {

            if (user) {

                done(null, user.get());

            } else {

                done(user.errors, null);

            }

        });

    });


}