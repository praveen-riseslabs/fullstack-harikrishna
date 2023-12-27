const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const User = require('./models/User')
const Form = require('./models/Form')
const multer = require('multer')
const path = require('path')


const JWT_SECRET = 'SecretStr!ng'

const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
app.use(express.static('Images'))


const PORT = 5000

mongoose.connect("mongodb://127.0.0.1:27017/MyFacebookApp")

app.post('/signup', [
    body('fullname', 'Enter a valid Fullname').isLength({ min: 3 }),
    body('email', 'Invalid Email').isEmail(),
    body('password', 'Password must atleast of 5 characters').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const salt = await bcrypt.genSaltSync(10);
        secPass = await bcrypt.hashSync(req.body.password, salt)

        const user = await User.create({
            fullname: req.body.fullname,
            email: req.body.email,
            password: secPass,
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
        let user = await User.findOne({ email: email })
        if (!user) {
            return res.status(400).json({ error: 'Invalid Login credentials' });
        }
        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            return res.status(400).json({ error: 'Invalid Login credentials' });
        }
        const authToken = await jwt.sign({ email: user.email }, JWT_SECRET);
        res.json({ token: authToken, email: user.email, fullname: user.fullname })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Server error' });
    }
});



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images/')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage })

app.post('/form-upload', upload.single('image'), async (req, res) => {
    const { token } = req.body;
    try {
        const user = jwt.verify(token, JWT_SECRET)
        const email = user.email;

        const form = await Form.create({
            email: email,
            title: req.body.title,
            description: req.body.description,
            image: req.file.filename,
            date: req.body.date
        })
        res.send(form)
    } catch (error) {
        console.log(error);
    }
});



app.post('/form-data', (req, res) => {
    const { token } = req.body;
    try {
        const user = jwt.verify(token, JWT_SECRET)
        const email = user.email;
        Form.find({ email })
            .then((data) => {
                // console.log(data);
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