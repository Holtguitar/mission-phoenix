const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
    // Restricts the data a user can submit to the DB
    userName: String,
    password: String,
    firstName: String,
    lastName: String,
    vetStatus: String,
    emailAddress: String,
    phoneNumber: String,
    adminUser: Boolean,
    subscribedToEmails: Boolean,
    purchases: Array,
    shoppingCart: Array,
    admin: Boolean,
    addressLine1: String,
    addressLine2: String,
    zipCode: String,
    city: String,
    state: String,
    zip: String,
    securityQuestion: Array
});

module.exports = mongoose.model('user', UsersSchema);