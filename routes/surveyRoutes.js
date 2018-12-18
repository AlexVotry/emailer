const requiredLogin = require('../middlewares/requiredLogin');

module.exports = app => {
  app.post('/api/surveys', requiredLogin, (req, res) => {

  });
}
