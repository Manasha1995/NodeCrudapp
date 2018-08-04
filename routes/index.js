var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title:'crudapp'});
});

router.get('/addUsers', function(req, res, next) {
  res.render('adduserform', { title:'crudapp'});
});

router.get('/usersTable', function(req, res, next) {
  res.render('usersTable', { title:'crudapp'});
});

module.exports = router;
