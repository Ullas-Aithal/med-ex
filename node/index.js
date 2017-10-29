var express = require('express');
var bodyParser = require('body-parser');
var app = express();

const ContextIO = require('contextio')

const cioClient = ContextIO({
  key: "KEY",
  secret: "SECRET",
  version: "2.0"
})


app.get('/about',function(req,res){
   
    res.write("Hello"); 
    res.end();

    
});

// cioClient.accounts().get({limit: 15}).then(res => {
//   console.log(res)
// })

cioClient.accounts().get({id:'59f4ccce7ce09945f23d03d3'}).then(res => {
  console.log(res)
})

cioClient.accounts('59f4ccce7ce09945f23d03d3').messages().get().then(res => {
  console.log(res)
})

app.listen(7070);