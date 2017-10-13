var express = require('express');
var http = require('http');

var app = express();

var port = process.env.PORT || 80;
var host = process.env.HOST || 'localhost';

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine','ejs');

app.get('/', function(req, res){
	res.render('index', {list:['Home','About','Rotations','Deliveries', 'Testimonials','Assessment','Future']});
})

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8080, 'localhost');
console.log('Server running at http://localhost:8080/');
	    
app.listen(port, host);

console.log('running server on port: ' + port);
