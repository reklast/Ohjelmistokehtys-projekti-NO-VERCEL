const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
const messages = [];

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    // Serve the chat HTML file
    fs.readFile(path.join(__dirname, 'chat.html'), (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (req.method === 'POST' && req.url === '/send') {
    // Handle message POST request
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const message = JSON.parse(body).message;
      messages.push(message);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Message sent successfully');
    });
  } else if (req.method === 'GET' && req.url === '/messages') {
    // Retrieve messages
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(messages));
  } else {
    // Handle 404 Not Found
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
