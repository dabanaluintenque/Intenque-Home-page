var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/Tutorial/', 'index.html'))
});

module.exports = router;
