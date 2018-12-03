var express = require('express');
const Themeparks = require('themeparks');
var app = express();

app.get('/', function(req, res) {
  res.send({
    Output: 'Hello World!'
  });
});

app.get('/test', (req, res) => {
  const park = new Themeparks.Parks[disneylandPark]();
  res.send({
    park: park
  });
});

app.post('/', function(req, res) {
  res.send({
    Output: 'Hello World!'
  });
});

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app;
