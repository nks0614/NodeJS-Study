const http = require('http');
const fs = require('fs');

const app = http.createServer(function(request,response){
    let url = request.url;
    if(url == '/'){
        url = '/index.html';
    }
    if(url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
    
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
 
});

app.listen(3000);