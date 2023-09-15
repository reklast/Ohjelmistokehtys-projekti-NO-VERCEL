const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3001;
const userMessages = {}; // Store messages for each user

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
      const { user, message } = JSON.parse(body);
      if (user && message) {
        if (!userMessages[user]) {
          userMessages[user] = [];
        }
        userMessages[user].push(message);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Message sent successfully');
      } else {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Invalid data');
      }
    });
  } else if (req.method === 'GET' && req.url.startsWith('/messages')) {
    // Retrieve messages for a specific user
    const user = req.url.split('/')[2];
    if (userMessages[user]) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(userMessages[user]));
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end('[]');
    }
  } else {
    // Handle 404 Not Found
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
