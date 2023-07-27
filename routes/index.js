var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');

//GET home page. 
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

app.use(express.static(path.join(__dirname, 'public')));



module.exports = router;
