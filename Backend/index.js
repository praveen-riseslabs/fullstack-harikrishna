const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/users')

const app = express()
app.use(express.json())
app.use(cors())

const PORT = 5000

mongoose.connect("mongodb://127.0.0.1:27017/Registration")

app.post('/register', (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch( err => res.json(err))
})

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    UserModel.findOne({ username: username})
    .then(user => {
        if(user) {
            if(user.password === password) {
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