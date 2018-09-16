const admin = require('firebase-admin');
var serviceAccount = require('../idictionary-3e488-firebase-adminsdk-vspct-e9b094b58e.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://idictionary-3e488.firebaseio.com"
});

module.exports = admin.firestore()