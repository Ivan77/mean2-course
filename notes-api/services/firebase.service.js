/**
 * Created by atilla8huno on 15/07/2016.
 */
var firebase = require('firebase');

// Firebase setup
firebase.initializeApp({
    serviceAccount: "./connection/firebase.json",
    authDomain: "notes-web-atilla-439a7.firebaseapp.com",
    databaseURL: "https://notes-web-atilla-439a7.firebaseio.com"
});

var auth = firebase.auth();

var firebaseService = {
    validateToken: validateToken
};

function validateToken(token) {
    return new Promise(function (resolve, reject) {
        auth.verifyIdToken(token)
            .then(function (user) {
                resolve(user);
            }, function (error) {
                reject(error);
            });
    });
}

module.exports = firebaseService;