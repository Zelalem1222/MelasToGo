/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions")

const { geocodeRequest } = require("./geocode")
const { payRequest } = require("./pay")
const stripeClient = require("stripe")(functions.config().stripe.key)


exports.geocode = onRequest((request, response) => {
    geocodeRequest(request , response);
});

exports.pay = onRequest((request, response ) => {
    payRequest(request , response , stripeClient);
});


// exports.placesNearBy = onRequest((request, response) => {
//     placesRequest(request , response);
// });
