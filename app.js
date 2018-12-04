var express = require('express');
const Themeparks = require('themeparks');
var app = express();

app.get('/', function(req, res) {
  const park = new Themeparks.Parks.DisneylandResortMagicKingdom();
  res.send({
    park: park
  });
  // park
  //   .GetWaitTimes()
  //   .then(rides => {
  //     res.send({
  //       rides: rides
  //     });
  //   })
  //   .catch(err => {
  //     res.send({
  //       error: err
  //     });
  //   });
});

app.post('/', function(req, res) {
  res.send({
    Output: 'Hello World!'
  });
});

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app;
