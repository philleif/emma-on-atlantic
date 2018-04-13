var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ebook', function(req, res, next) {
  res.render('ebook', { title: 'Express' });
});

router.get('/thanks', function(req, res, next) {
  res.render('thanks', { title: 'Express' });
});


module.exports = router;
