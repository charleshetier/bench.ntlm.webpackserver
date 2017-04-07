const express = require('express');
const http = require('http');
const NodeSSPI = require('node-sspi');

const app = express();
const server = http.createServer(app);

app.use(function (req, res, next) {
    const nodeSSPI = new NodeSSPI();
    nodeSSPI.authenticate(req, res, function (err) { res.finished || next(); });
});

app.use(function (req, res, next) {
    var out = 'Hello ' + req.connection.user;
    res.send(out);
});

// Start server
var port = process.env.PORT || 3000;
server.listen(port, function () {
    console.log('Express server listening on port %d in %s mode', port, app.get('env'));
});