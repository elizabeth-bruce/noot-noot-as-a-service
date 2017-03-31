var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/nootnoot', function(req, res, next) {
  res.json('noot noot');
});

module.exports = router;
