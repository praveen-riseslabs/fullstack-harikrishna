const mongoose = require('mongoose')

const FormSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String
    },
    date: {
        type: Date,
        required: true
    }
});

const Form = mongoose.model('form', FormSchema);
module.exports = Form;