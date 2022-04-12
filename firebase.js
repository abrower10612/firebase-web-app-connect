
var admin = require("firebase-admin");

var serviceAccount = require("./firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://connect-firebase-example-default-rtdb.firebaseio.com/'
});

module.exports = admin;
