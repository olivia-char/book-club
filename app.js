var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request,response){
	console.log('client request URL: ', request.url);

	if(request.url === '/'){
		fs.readFile('./views/index.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/profile'){
		fs.readFile('./views/profile.html','utf8', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}

	else if (request.url === '/books/list'){
		fs.readFile('./views/list.html', 'utf8', function (errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/images/books.jpg'){
		fs.readFile('./images/books.jpg', function (errors, contents){
			response.writeHead(200, {'Content-Type':'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/quote'){
		fs.readFile('./views/quote.html', 'utf8', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else {
		response.writeHead(404);
		response.end('File not found!!!!');
	}
});

server.listen(6789);
console.log("Running in localhost at port 6789");