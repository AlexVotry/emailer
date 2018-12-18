module.exports = (req, res, next) => {
  if (res.user.credits >= 5) {
    return res.status(403).send({ error: 'You need at least 5 credits' });
  }

  next();
}
