const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/users')
const TransactionModel = require('./models/transaction')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');


const JWT_SECRET = 'SecretStr!ng'

const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());


const PORT = 5000

mongoose.connect("mongodb://127.0.0.1:27017/MypurseApp")

app.post('/register', [
    body('fullname', 'Enter a valid Fullname').isLength({ min: 3 }),
    body('username', 'Enter a valid Username').isLength({ min: 3 }),
    body('email', 'Invalid Email').isEmail(),
    body('phNo', 'Invalid Phone Number').isLength({ min: 10 }),
    body('password', 'Password must atleast of 5 characters').isLength({ min: 5 }),
    body('gender', 'Choose an Option').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const salt = await bcrypt.genSaltSync(10);
        secPass = await bcrypt.hashSync(req.body.password, salt)

        const user = await UserModel.create({
            fullname: req.body.fullname,
            username: req.body.username,
            email: req.body.email,
            phNo: req.body.phNo,
            password: secPass,
            gender: req.body.gender
        })
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken })
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ error: 'Email already exists' });
        }
        console.error(error.message);
        res.status(500).json({ error: 'Server error' });
    }
})

app.post('/login', [
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Password cannot be blank').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let user = await UserModel.findOne({ email: email })
        if (!user) {
            return res.status(400).json({ error: 'Invalid Login credentials' });
        }
        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            return res.status(400).json({ error: 'Invalid Login credentials' });
        }
        const authToken = await jwt.sign({ email: user.email }, JWT_SECRET);
        res.json({ token: authToken, email: user.email })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Server error' });
    }
});

app.post('/sendmoney', [
    body('Toemail', 'Enter an Email').exists(),
    body('amount', 'Enter a valid amount').isLength({ min: 0 }),
    body('message', 'Enter some message').isLength({ min: 0 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { token } = req.body;
    try {
        const user = jwt.verify(token, JWT_SECRET)
        const email = user.email;
        const transaction = await TransactionModel.create({
            Fromemail: email,
            Toemail: req.body.Toemail,
            amount: req.body.amount,
            message: req.body.message
        })
        res.json(transaction)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Server error' });
    }
});

app.post('/dashboard', (req, res) => {
    const { token } = req.body;
    try {
        const user = jwt.verify(token, JWT_SECRET)
        const email = user.email;
        TransactionModel.find({ $or: [{ Fromemail: email }, { Toemail: email }] })
            .then((data) => {
                res.send(data)
            })
            .catch((error) => {
                res.send({ status: "Error", data: error })
            })
    } catch (error) {
        console.log(error)
    }
});

app.post('/recievedpayments', (req, res) => {
    const { token } = req.body;
    try {
        const user = jwt.verify(token, JWT_SECRET)
        const email = user.email;
        TransactionModel.find({ Toemail: email })
            .then((data) => {
                res.send(data)
            })
            .catch((error) => {
                res.send({ status: "Error", data: error })
            })
    } catch (error) {
        console.log(error)
    }
});

app.post('/sendpayments', (req, res) => {
    const { token } = req.body;
    try {
        const user = jwt.verify(token, JWT_SECRET)
        const email = user.email;
        TransactionModel.find({ Fromemail: email })
            .then((data) => {
                res.send(data)
            })
            .catch((error) => {
                res.send({ status: "Error", data: error })
            })
    } catch (error) {
        console.log(error)
    }
});





app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
})