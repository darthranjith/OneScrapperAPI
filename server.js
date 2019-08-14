const express = require('express');
const spicinemas = require('./routes/spicinemas');
const app = express();
var cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

var port = process.env.PORT || 3000;

app.use(cors(corsOptions));

app.get('/', function (req, res) {
    res.json({"OneScrapper": "REST API with node.js"});
});

// public route
app.use('/spicinemas', spicinemas);


app.listen(port, function () {
    console.log('Node server listening on port ' + port);
});
