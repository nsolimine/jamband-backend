var express = require('express');
var router = express.Router();
var db = require('../db/knex.js');
const knex = require('knex');


// router.get('/', function(req, res, next) {
//   console.log("got it!");
//   db('players').select().innerJoin('purgatory', 'players.id', 'purgatory.players_id')
//     .then(function(data){
//       console.log(data)
//     })
// })




module.exports = router;
