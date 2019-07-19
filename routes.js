const express = require('express');
const router = express.Router();
const mysql = require("mysql");
const config = require('./config');

// connect to mysql
const connect = mysql.createPool(config.mysql);
const mysqlError = { error: true, message: 'Error executing MySQL query'};

// all the routes
router.get('/api_tokens', (req, res) => {
  var query = mysql.format(`SELECT * FROM api_tokens`);
  connect.query(query, (err, rows) => {
    if (err) return res.json(mysqlError);

    res.json(rows);
  });
});

router.get('/ora_users/:id', (req, res) => {
  var query = mysql.format('SELECT * FROM ora_users WHERE id = ?', [req.params.id]);
  connect.query(query, (err, rows) => {
    if (err) return res.json(mysqlError);

    res.json(rows);
  });
});

module.exports = router;