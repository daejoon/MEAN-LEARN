var express = require("express");

var app = express();

for (var key in process.env ) {
    console.log(key + '=' + process.env[key]);
}

console.log('dirname=' + __dirname);
console.log('filename=' + __filename);



app.get('/', function(req, res) {
    res.send('hello world!');
});

app.listen(3000);
