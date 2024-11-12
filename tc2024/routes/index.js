var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/manual', function(req, res, next) {
  res.send('<h1>Manyal page</h1>');
});

router.get('/mental', function(req, res, next) {
  res.send('<h1>Mental page</h1>');
});

router.get('/sedent', function(req, res, next) {
  res.send('<h1>Sedent page</h1>');
});

module.exports = router;
