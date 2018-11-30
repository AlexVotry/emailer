const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const thirtyDays = 30 * 24 * 60 * 60 * 1000;
require('./models/User'); // model need to be before passport.  Model needs to be defined before passport calls it.
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

// initialize cookie, get passport to use cookie
app.use(
  cookieSession({
    MaxAge: thirtyDays,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`running on ${PORT}...`);
});
