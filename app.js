var fs = require("fs");
    var express = require("express");
    app = express();

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
    fs.readFile(__dirname + '/public/views/' + req.url, 'utf8', function(err, text){
        res.send(text);
    });
});

app.listen(3000);

console.log('Server running at http://127.0.0.1:1337/');
