const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    product: { type: String, required: true, trim: true },
    quantity: { type: Number, required: true, trim: true },
    price: { type: Number, required: true, trim: true },
    date: { type: Date, default: Date.now }
})



// Create a Mongoose model for the 'sales' collection
const SalesModel = mongoose.model('sales', DataSchema);

module.exports = SalesModel;