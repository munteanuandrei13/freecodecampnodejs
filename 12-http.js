const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our homepage')
    }
    
    if (req.url === '/about') {
        res.end('Here is our short history')
    }

    res.end(`<h1>Oops!</h1><p>404</p>`)
})

server.listen(8000)