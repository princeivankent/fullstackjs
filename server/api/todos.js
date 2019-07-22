const mysql = require('mysql');
const config = require('../config/database');
const connect = mysql.createConnection(config.mysql);

function getTodos (req, res) {
  var query = mysql.format(`SELECT * FROM todos`);
  connect.query(query, (err, rows) => {
    if (err) 
      return res.json(err);

    return res.json(rows);
  });
}

function getTodo (req, res) {
  var query = mysql.format('SELECT * FROM todos WHERE id = ?', [req.params.id]);
  connect.query(query, (err, rows) => {
    if (err) return res.json(err);

    res.json(rows);
  });
}

module.exports = { 
  getTodos, getTodo
}