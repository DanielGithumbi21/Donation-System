const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");


const donorRouter = require('./routes/donor');
const doneeRouter = require('./routes/donee');
const adminRouter = require('./routes/admin');

const app = express();

const db = require('./config/db').MongoURI;
const { MongoURI } = require('./config/db');
// "mongodb://127.0.0.1:27017/donation"

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true }).then(console.log('Connected to MongoDB Atlas')).catch(err => console.log(err))

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);
  
    socket.on("join_room", (data) => {
      socket.join(data);
      console.log(`User with ID: ${socket.id} joined room: ${data}`);
    });
  
    socket.on("send_message", (data) => {
      socket.to(data.room).emit("receive_message", data);
    });
  
    socket.on("disconnect", () => {
      console.log("User Disconnected", socket.id);
    });
  });

app.use('/api/donor', donorRouter);
app.use('/api/donee', doneeRouter);
app.use('/api/admin', adminRouter);

module.exports = { app: app, server: server };