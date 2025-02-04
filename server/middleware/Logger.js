const Logger = (req, res, next) => {
  if (req.path != "/search/wake") console.log(`${req.method} ${req.path}`);
  next();
};

module.exports = { Logger };
