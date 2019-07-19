const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const routes = require('./routes');
const config = require('./config');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

app.use('/api', routes);

app.listen(process.env.PORT || config.port);
