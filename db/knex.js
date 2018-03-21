const knex = require('knex');
const environment = "development";
const config = require('../knexfile.js');
const db = require('knex')(config[environment])

module.exports = db
