//Archivo para el intento de aplicar passport
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var express = require('express');
var router = express.Router();

passport.use('login', new LocalStrategy({
    passReqToCallback : true
  }/*,
  function(req, username, password, done) {
  console.log("passportlo",username);
}*/));

module.exports = passport = router;
