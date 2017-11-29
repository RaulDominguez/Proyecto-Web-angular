//DAO para la manipulacion con los usuarios en la base de datos
const express 	= require('express');
const ObjectID  = require('mongodb').ObjectID;
const db        = require('../database/mongo');

var DAO = {

  UserLogin: function(req,res){
    console.log('user',req.body);
  },

  insertOne: function(req, res){
    console.log("insertOne : ", req.body);
    db.insertOne("user", req.body).then(function(data){
			res.json(data);
    }).catch(function (error) {
      res.json(error);
    });
  },

  updateOne: function(req, res){
    console.log("updateOne: body: ", req.body);
    db.updateOne("user", req.body ).then(function(data){

			res.json(data);

    }).catch(function (error) {

      res.json(error);

    });

  },

  deleteOne: function(req, res){
    console.log("deleteOne: id: ", req.params.id);
    db.deleteOne("user", req.params.id ).then(function(data){
			res.json(data);
    }).catch(function (error) {
      res.json(error);
    });
  }
}

module.exports = exports = DAO;
