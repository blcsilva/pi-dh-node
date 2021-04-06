var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const flash = require('express-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
var db = require("./models/");
var indexRouter = require('./routes/index');
var sobreRouter = require('./routes/sobre');
var authRoute = require('./routes/auth');
var cadastroRouter = require('./routes/cadastro');
var produtoRouter = require('./routes/produto');
var anunciarRouter = require('./routes/anunciar');
var compraProdutoRouter = require('./routes/compraProduto');
var compraFinalizadaRouter = require('./routes/compraFinalizada');
var meusProdutosRouter = require('./routes/meusProdutos');
var areaLogada = require('./routes/arealogada');
const listarUsuarios = require('./routes/users');

//load passport strategies
require("./config/passport/passport.js")(passport, db.Auth);
const User = require('./models/User');
const { cookie } = require('express-validator');
const { Router } = require('express');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: '123',
  resave: true,
  saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session());


app.use('/', indexRouter);
app.use('/sobre', sobreRouter);
app.use('/login', authRoute);
app.use('/cadastro', cadastroRouter);
app.use('/produto', produtoRouter);
app.use('/anunciar', anunciarRouter);
app.use('/compraProduto', compraProdutoRouter);
app.use('/compraFinalizada', compraFinalizadaRouter);
app.use('/meusProdutos', meusProdutosRouter);
app.use('/dashboard', areaLogada);
app.use('/listarusuarios',listarUsuarios);

app.use(flash());


//Helpers

passport.serializeUser(function(user, done) {
  done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
  connection.query("select * from users where id = "+id,function(err,rows){	
    done(err, rows[0]);
  });
  });





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.flashes = flash();
  res.locals.user = req.user;
  res.locals.body = req.body;

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
