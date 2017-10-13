var express = require('express');

var app = express();

var port = process.env.PORT || 80;
var host = process.env.HOST || 'localhost';

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine','ejs');

app.get('/', function(req, res){
	res.render('index', {list:['Home','About','Rotations','Deliveries', 'Testimonials','Assessment','Future']});
})

app.listen(port, host);

console.log('running server on port: ' + port);
