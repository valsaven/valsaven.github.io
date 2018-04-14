var express = require('express');
var request = require('request');
var Webtask = require('webtask-tools');

var app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get(`/gr/*`, function(req, res) {
  var apiCall = req.url.slice('/gr/'.length);
  var apiReq = 'https://www.goodreads.com/' + apiCall;
  request.get(apiReq, function(err, _, body) {
    res.send(body);
  });
});

app.get(`/stm/*`, function(req, res) {
  var apiCall = req.url.slice('/stm/'.length);
  var apiReq = 'http://api.steampowered.com/' + apiCall;
  request.get(apiReq, function(err, _, body) {
    res.send(body);
  });
});

module.exports = Webtask.fromExpress(app);
