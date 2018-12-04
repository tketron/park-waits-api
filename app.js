var express = require('express');
const Themeparks = require('themeparks');
var app = express();

app.get('/', function(req, res) {
  res.send({
    Output: 'Theme Parks Go Here!'
  });
});

app.post('/', function(req, res) {
  res.send({
    Output: 'Hello World!'
  });
});

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app;
