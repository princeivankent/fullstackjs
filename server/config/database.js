var prod = {
  connectionLimit: 100,
  host: '172.16.1.34',
  user: 'root',
  password: 'latropcpi',
  database: 'ipc_rushform',
  debug: true
}

var mysql = {
  connectionLimit: 100,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'basic',
  debug:  false
}

var port = 3000

module.exports = { prod, mysql, port }