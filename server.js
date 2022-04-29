const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Message du server');
});

server.listen(process.env.PORT || 3000)
