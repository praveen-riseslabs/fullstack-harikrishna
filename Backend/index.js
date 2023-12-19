const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv')
const connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes')


const app = express();
dotenv.config();
connectDB()

app.use(express.json());
app.use(cors());


app.use('/api/user', userRoutes)


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`))