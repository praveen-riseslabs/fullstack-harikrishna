const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv')
const connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes')
const chatRoutes = require('./routes/chatRoutes')
const messageRoutes = require('./routes/messageRoutes')


const app = express();
dotenv.config();
connectDB()

app.use(express.json());
app.use(cors());


app.use('/api/user', userRoutes)
app.use('/api/chat', chatRoutes)
app.use('/api/message', messageRoutes)


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`))