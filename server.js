const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type','text/html');
    response.statusCode = 200;
    response.end('<h1>Welcome HTTP Server !</h1>');

};

const server = http.createServer(http.requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port,host,()=> {
    console.log(`Web Server telah berjalan pada http://${host}:${port}`);
});