const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
    // Restricts the data a user can submit to the DB
    userName: String,
    password: String,
    firstName: String,
    lastName: String,
    vetStatus: Boolean,
    emailAddress: String,
    phoneNumber: String,
    adminUser: Boolean,
    subscribedToEmails: Boolean
});

module.exports = mongoose.model('user', UsersSchema);