const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
app.use(cookieParser());
app.use(express.json());
const connectDB = require('./config/db');
require('dotenv').config({path: "./config.env"});

const Port = process.env.PORT;

connectDB();

const userRouter = require('./routes/User');
app.use('/user',userRouter);

app.listen(Port, () => {

    console.log('App is running on port', Port)

});