const keys = require('../config/keys');
const stripe = require("stripe")(keys.stripeSecretKey);
const requiredLogin = require('../middlewares/requiredLogin');

// from https://stripe.com/docs/api/charges/create?lang=node
// stripe.charges.create({
//   amount: 2000,
//   currency: "usd",
//   source: "tok_amex", // obtained with Stripe.js
//   description: "Charge for jenny.rosen@example.com"
// }, function(err, charge) {
//   // asynchronously called
// });

module.exports = app => {
  app.post('/api/stripe', requiredLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    });

    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
}
