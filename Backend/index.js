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

const server = app.listen(PORT, console.log(`Server started on PORT ${PORT}`))

const io = require('socket.io')(server, {
    pingTimeout: 60000,
    cors: {
        origin: "http://localhost:3000"
    }
});

io.on("connection", (socket) => {
    console.log('Connected to Socket.io');

    socket.on("setup", (userData) => {
        socket.join(userData._id)
        socket.emit("Connected")
    });

    socket.on("join chat", (room) => {
        socket.join(room)
        console.log("User joined room: " + room);
    });

    socket.on("typing", (room) => {
        socket.in(room).emit("typing");
    });
    socket.on("stop typing", (room) => {
        socket.in(room).emit("stop typing");
    });

    socket.on("new message", (newMessageRecieved) => {
        var chat = newMessageRecieved.chat
        if (!chat.users) {
            return console.log("chat.users not defined");
        }

        chat.users.forEach(user => {
            if (user._id === newMessageRecieved.sender._id) {
                return;
            }
            socket.in(user._id).emit("message recieved", newMessageRecieved)
        });
    });

    socket.off("setup", () => {
        console.log("User Disconnected");
        socket.leave(userData._id)
    })
});