const http = require('http');

const server = http.createServer();

server.on('request',(req,res) => {
    let body = '';
    console.log(req.headers);
    
    req.on('data', chunk => {
        body += chunk;
    });

    req.on('error', err => {
        console.log(err);
    })

    req.on('end', () => {
        console.log(body);
        res.end('owata')
    })
}).listen(process.env.PORT||8080)