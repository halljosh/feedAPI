const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feedroutes');

const app = express();

app.use(bodyParser.json()); // parses JSON data from incoming requests

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // allows any origin to access the server
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE'); // allows these methods to be used by the client
    res.setHeader('Access-Control-Allow-Headers', '*'); // allows client to set any headers
    next();
});

app.use('/feed', feedRoutes);

app.listen(8080);
console.log("server running!");