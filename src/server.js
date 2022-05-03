const express = require('express');
const routes = require('./routes');
const morgan = require('morgan');

require('./database'); // Initialize the database

const app = express();

app.use(morgan('dev')); // Log all requests
app.use(express.json());
app.use(routes);
app.listen(3000);

console.log('Server running on port 3000');