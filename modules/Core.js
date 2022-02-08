// http, url, querystring, path - Core Modules

const http = require("http")

http.createServer(function(httpRequest, httpResponse){
    if(httpRequest.url == '/') {
        httpResponse.writeHead(200, {'Content-Type' : 'text/html'})
        httpResponse.end("<h1>Hello World</h1>")
    } 
    if(httpRequest.url == '/employee'){
        console.log(httpRequest.url)
        httpResponse.writeHead(200, {'Content-Type' : 'text/html'})
        httpResponse.end("<h1>Welcome to the new Employee</h1>")
    }
    if(httpRequest.url == '/user'){
        console.log(httpRequest.url)
        httpResponse.writeHead(200, {'Content-Type' : 'text/html'})
        httpResponse.end("<h1>New user request</h1>")
    }
}).listen(1234)

// axios, nodemon, express - Third Party Modules