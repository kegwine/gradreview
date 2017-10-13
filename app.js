var express = require('express');
var http = require('http');

var app = express();

var port = 8080;

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine','ejs');

app.get('/', function(req, res){
	res.render('index', {list:['Home','About','Rotations','Deliveries', 'Testimonials','Assessment','Future']});
})


	    
app.listen(port, function () {
  console.log('Magic is happening on port' + port)
})

console.log('running server on port: ' + port);
