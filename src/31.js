// Node.js API example
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end(`Hello, world! ${JSON.stringify(req.headers)}`);
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
