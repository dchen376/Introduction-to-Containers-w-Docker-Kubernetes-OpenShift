var express = require('express')
var os = require("os");
var hostname = os.hostname();
var app = express()

app.get('/', function(req, res) {
//   res.send('Welcome ' + hostname + '! Your app is up and running!\n')
  res.send(process.env.MESSAGE + '\n') //this change indicates that requests to the app will return the environment variable MESSAGE.
})
app.listen(8080, function() {
  console.log('Sample app is listening on port 8080.')
})