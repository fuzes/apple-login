var http = require('http')
var fs = require('fs')
var express = require('express')
var app = express()

var server = http.createServer(app).listen(3003, () => console.log('server running'));

app.get('/', (req, res) => {
		fs.readFile('index.html', (error, data) => {
				res.writeHead(200, {'Content-Type': 'text/html' })
				res.end(data);
				});
		});

