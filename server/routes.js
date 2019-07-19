const express = require('express');
const router = express.Router();
const todos = require('./api/todos.js')

router.get('/todos', (req, res) => todos.get(req, res));

// router.get('/ora_users/:id', (req, res) => {
//   var query = mysql.format('SELECT * FROM ora_users WHERE id = ?', [req.params.id]);
//   connect.query(query, (err, rows) => {
//     if (err) return res.json(mysqlError);

//     res.json(rows);
//   });
// });

module.exports = router;