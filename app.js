const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feedroutes');

const app = express();

app.use(bodyParser.json()); // parses JSON data from incoming requests

app.use('/feed', feedRoutes);

app.listen(8080);
console.log("server running!");