const authorize = (req, res, next) => {
  const { user } = req.query;
  console.log(user);
  if (user) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
