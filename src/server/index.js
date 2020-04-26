let express = require('express');

let app = express();

// Config
require('dotenv').config();

// Middlewares
app
    .use(require('morgan')('dev'))
    .use(express.json())
    .use(express.static('public'))
    ;

// Routes
app
    .use('/', require('./routes/root'));

// Server
let port = process.env.EXPRESS_PORT || 8000;
let host = process.env.host || 'localhost';

app.listen(port, host, () => {
    console.log(`Server initiated: http://${host}:${port}`);
});
