var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  var id = req.query.r;
  var timeout;
  switch(id){
    case '1': timeout = 3000; break;
    case '2': timeout = 500; break;
    default: timeout = 1;
  }

  setTimeout(function() {
    res.send('Resposta da requisição ' + id);
  }, timeout);
  
});

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
});