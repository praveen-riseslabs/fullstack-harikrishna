const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/users')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const EmployeeModel = require('./models/employees')


const JWT_SECRET = 'SecretStr!ng'

const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const PORT = 5000

mongoose.connect("mongodb://127.0.0.1:27017/Registration")

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

app.post('/dashboard', (req, res) => {
    const { token } = req.body;
    try {
        const user = jwt.verify(token, JWT_SECRET)
        const email = user.email;
        UserModel.findOne({ email: email }).select("-password")
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

app.post("/forgot-password", async (req, res) => {
    const { email } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.json({ status: "User does not exist" });
        }
        const token = jwt.sign({ email: user.email, id: user._id }, JWT_SECRET, { expiresIn: "5m" });
        const link = `http://localhost:5000/reset-password/${user._id}/${token}`
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'harikrishnankhd09@gmail.com',
                pass: 'nyvi nwya xwja abma'
            }
        });
        var mailOptions = {
            from: 'tester@gmail.com',
            to: 'Harikrishnankhd09@gmail.com',
            subject: 'Password Reset Link',
            text: link
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    } catch (error) { }
});

app.get("/reset-password/:id/:token", async (req, res) => {
    const { id, token } = req.params;
    console.log(req.params);
    const user = await UserModel.findOne({ _id: id });
    if (!user) {
        return res.json({ status: "User does not exist" });
    }
    try {
        const verify = jwt.verify(token, JWT_SECRET);
        res.render("index", { email: verify.email, status: "Not Verified" });
    } catch (error) {
        console.log(error);
        res.send("Not Verified");
    }
});

app.post("/reset-password/:id/:token", async (req, res) => {
    const { id, token } = req.params;
    const { password } = req.body
    const user = await UserModel.findOne({ _id: id });
    if (!user) {
        return res.json({ status: "User does not exist" });
    }
    try {
        const verify = jwt.verify(token, JWT_SECRET);
        const salt = await bcrypt.genSaltSync(10);
        secPass = await bcrypt.hashSync(req.body.password, salt)
        await UserModel.updateOne(
            {
                _id: id,
            },
            {
                $set: {
                    password: secPass,
                },
            }
        );
        res.json({ status: "Password Updated Successfully" });
    } catch (error) {
        console.log(error);
        res.json({ status: "Something Went Wrong" });
    }
});

app.post('/addemployee', [
    body('emp_name', 'Enter a valid Employee name').isLength({ min: 3 }),
    body('emp_id', 'Enter a valid Employee ID').isLength({ min: 3 }),
    body('designation', 'Enter a valid Designation').isLength({ min: 3 }),
    body('reporting_manager', 'Enter a valid Employee name').isLength({ min: 3 }),
    body('hr_manager', 'Enter a valid Employee name').isLength({ min: 3 }),
    body('gender', 'Choose an Option').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const employee = await EmployeeModel.create({
            emp_name: req.body.emp_name,
            emp_id: req.body.emp_id,
            designation: req.body.designation,
            reporting_manager: req.body.reporting_manager,
            hr_manager: req.body.hr_manager,
            gender: req.body.gender
        })
        res.json(employee)
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ error: 'Employee ID already exists' });
        }
        console.log(error.message);
        res.status(500).json({ error: 'Server error' });
    }
});

app.get('/allemployees', async (req, res) => {
    try {
        const allEmployees = await EmployeeModel.find({})
        res.send(allEmployees)
    } catch (error) {
        console.log(error)
    }
});



app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
})