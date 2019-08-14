const express = require('express');
const spicinemas = require('./routes/spicinemas');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.json({"OneScrapper": "REST API with node.js"});
});

// public route
app.use('/spicinemas', spicinemas);


app.listen(port, function () {
    console.log('Node server listening on port ' + port);
});
