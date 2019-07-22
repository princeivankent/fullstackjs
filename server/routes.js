const express = require('express');
const router = express.Router();
const todos = require('./api/todos.js')

router.use((err, req, res, next) => {
  if (!req.headers['x-auth']) {
    // res.status(500).send('Something broke!')
    // res.send(err)
    return next();
  }
  else {
    next();
  }
})

router.get('/todos', (req, res) => todos.getTodos(req, res));
router.get('/todos/:id', (req, res) => todos.getTodo(req, res));

module.exports = router;