var express = require('express');
var router = express.Router();
var db = require('../db.knex.js')
const knex = require('knex')

router.get('/', function(req, res, next) {
  knex('players').select('*')
    .then(function(data){
      console.log(data)
    })

})

module.exports = router;
