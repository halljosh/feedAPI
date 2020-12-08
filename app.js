const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

app.use(bodyParser.json()); // parses JSON data from incoming requests

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // allows any origin to access the server
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // allows GET to be used by the client
    res.setHeader('Access-Control-Allow-Headers', '*'); // allows client to set any headers
    next();
});

app.use('/api', routes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
