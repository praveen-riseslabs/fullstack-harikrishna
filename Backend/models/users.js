const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phNo: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    wallet: {
        type: String,
        default: "1000"
    }
});

const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;