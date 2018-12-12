https://react-emailer.herokuapp.com/

to open up a mongo db instance:
https://mlab.com

create new db.
expand db in dashboard.
add a db user:

google account:
https://console.developers.google.com

add new project.
create credentials
google+
google

heroku.com:

react-emailer > settings > Config Vars

use keys from prod.js  : info from google and mongo.

fix the http proxy problem:

add 'proxy: true' to GoogleStrategy

```React```
npm create-react-app

https://github.com/facebook/create-react-app

create-react-app client

to run both servers simultaneously:
run npm start (client server) within the emailer server.
emailer > package.json:
"scripts": {
  "start": "node index.js",
  "server": "nodemon index.js",
  "client": "npm run start --prefix client",
  "dev": "concurrently \"npm run server\" \"npm run client\""
},

npm install --save concurrently

to run both servers:  npm run dev
The error  on front end routes "/auth/google" goes to React Server not the back end server:

1) In the client/ directory install this package:

npm install http-proxy-middleware --save

2) Create setupProxy.js file in client/src/ directory. There is no need to import this file anywhere, CRA looks for a file by this name and loads it.

3) Then add this to the setupProxy.js file:

const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(proxy('/auth/google', { target: 'http://localhost:5000' }))
    // add additional proxies:
    app.use(proxy('/api/*', { target: 'http://localhost:5000' }))
}

add redirect uri to https://console.developers.google.com/apis/credentials in "credentials" under "authorized redirect URIs"

https://www.udemy.com/node-with-react-fullstack-web-development/learn/v4/t/lecture/12072146?start=0


https://www.npmjs.com/package/stripe
https://stripe.com/docs/api/charges/create?lang=node
npm install --save
