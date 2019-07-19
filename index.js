const express = require("express");
const app = express();
const cors = require('cors')

const bodyParser = require("body-parser");
const routes = require("./api/routes");
const config = require('./api/config');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

// include the routes
app.use('/api', routes);

app.listen(process.env.PORT || config.port);
