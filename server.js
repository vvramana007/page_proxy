// server.js (Node.js/Express)
const express = require('express');
const request = require('request');
const app = express();

app.get('/api/proxy', (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl) return res.status(400).send('Missing url parameter');
  request(targetUrl).pipe(res);
});

// Add production-ready logic for auth, rate limits, error handling...

app.listen(3001, () => console.log('Server running on port 3001'));
