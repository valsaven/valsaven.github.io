const express = require('express');
const request = require('request');
const webtask = require('webtask-tools');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/gr/*', (req, res) => {
  const apiCall = req.url.slice('/gr/'.length);
  const apiReq = `https://www.goodreads.com/${apiCall}`;

  request.get(apiReq, (err, _, body) => {
    res.send(body);
  });
});

app.get('/stm/*', (req, res) => {
  const apiCall = req.url.slice('/stm/'.length);
  const apiReq = `http://api.steampowered.com/${apiCall}`;
  request.get(apiReq, (err, _, body) => {
    res.send(body);
  });
});

module.exports = webtask.fromExpress(app);
