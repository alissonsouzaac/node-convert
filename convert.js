var express = require('express');
var bodyParser = require('body-parser');

app = express();

app.use(bodyParser());

port = process.env.port || 3000;

app.post('/convert', function(req, res) {
    var from = req.body.from;
    var to = req.body.to;
    var value = req.body.value;

    if(from == 'brl' && to =='eua') {
        res.json({"value": value/4.48});
    } else {
        res.json({"error": "error"});
    }
});

app.listen(port, () => {
    console.log("Message RESTfull API server started on: "+port);
});