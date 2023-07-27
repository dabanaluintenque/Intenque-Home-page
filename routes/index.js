var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

app.use(express.static(path.join(__dirname,"./my-homepage")));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './my-homepage', 'index.html'))
});

module.exports = router;
