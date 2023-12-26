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
    }
});

const Form = mongoose.model('form', FormSchema);
module.exports = Form;