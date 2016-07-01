var express = require('express');
var router = express.Router();
var data = require('../public/javascripts/data');
var filter = require('../public/javascripts/filter');

router.get('/users', function(req, res, next) {
  res.json(data);
})

router.get('/active_users', function(req, res, next) {
  res.json(filter.filter(data.users));
})

module.exports = router;
