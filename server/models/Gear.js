const mongoose = require("mongoose");

const GearSchema = new mongoose.Schema({
    // Restricts the data a user can submit to the DB
    itemName: String,
    sizes: Array,
    colors: Array,
    prices: Array,
    imageURLS: Array,
    inStock: Boolean,
    category: String,
});

module.exports = mongoose.model('gear', GearSchema);