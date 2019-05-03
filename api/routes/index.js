var express = require('express');
var router = express.Router();

const users = {
  userName: "hi",
  password: "express"
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api', function(req, res, next) {
  res.json(users);
});

module.exports = router;
