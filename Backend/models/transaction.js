const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
    Fromemail: {
        type: String,
        required: true,
    },
    Toemail: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});


const TransactionModel = mongoose.model('transaction', TransactionSchema);
module.exports = TransactionModel;