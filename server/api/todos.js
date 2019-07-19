const mysql = require('mysql');
const config = require('../config');

const connect = mysql.createPool(config.mysql);
const mysqlError = { error: true, message: 'Error executing MySQL query'};

function get (req, res) {
  var query = mysql.format(`SELECT * FROM todos`);
  connect.query(query, (err, rows) => {
    if (err) 
      return res.json(mysqlError);

    return res.json(rows);
  });
}

module.exports = { 
  get 
}