var logger = function (req, res, next) {
  console.log('User queries')
  next();
}

module.exports = logger