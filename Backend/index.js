const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/users')
const { body, validationResult } = require('express-validator');

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
    body('password', 'Password must atleast of 5 characters').isLength({ min: 5 })
], (req, res) => {
    // UserModel.create(req.body)
    // .then(users => res.json(users))
    // .catch( err => res.json(err))
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    UserModel.create({
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        phNo: req.body.phNo,
        password: req.body.password
    }).then(users => res.json(users))
        .catch(err => res.json({err: "Invalid Credentials"}))
})

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    UserModel.findOne({ username: username })
        .then(user => {
            if (user) {
                if (user.password === password) {
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