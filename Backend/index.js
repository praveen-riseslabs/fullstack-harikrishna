const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/users')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const app = express()
app.use(express.json())
app.use(cors())

const PORT = 5000

mongoose.connect("mongodb://127.0.0.1:27017/Registration")

app.post('/register', [
    body('fullname', 'Enter a valid Fullname').isLength({ min: 3 }),
    body('username', 'Enter a valid Username').isLength({ min: 3 }),
    body('email', 'Invalid Email').isEmail(),
    body('phNo', 'Invalid Phone Number').isLength({ min: 10 }),
    body('password', 'Password must atleast of 5 characters').isLength({ min: 5 }),
    body('gender', 'Choose an Option').exists()
], (req, res) => {
    // UserModel.create(req.body)
    // .then(users => res.json(users))
    // .catch( err => res.json(err))
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const salt = bcrypt.genSaltSync(10);
    secPass = bcrypt.hashSync(req.body.password, salt)

    UserModel.create({
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        phNo: req.body.phNo,
        password: secPass,
        gender: req.body.gender
    }).then(users => res.json(users))
        .catch(err => res.json({err: "Invalid Credentials"}))
})

app.post('/login', [
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Password cannot be blank').exists()
], (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                // if (user.password === password) {
                if (bcrypt.compare(password, user.password)) {
                    res.json("Success")
                } else {
                    res.json("Incorrect password")
                }
            } else {
                res.json("Invalid Credentials")
            }
        })
});

app.get('/users', (req, res) => {
    UserModel.find()
        .then((users) => res.send(users))
        .catch((error) => res.json(error))
});

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
})