const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const routes = require("./routes");
const config = require('./config');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// include the routes
app.use('/api', routes);

app.listen(process.env.PORT || config.port, () => console.log("All right ! I am alive at Port 3000."));
