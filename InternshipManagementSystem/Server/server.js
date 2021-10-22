require('dotenv').config({path: "./config.env"});
const express = require("express");
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

//Connect DB
connectDB();

const app = express();

//middleware
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/private', require('./routes/private'));

//Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 8181;

const server = app.listen(PORT, () => 
  console.log(`Server is running on ${PORT}`)
);

process.on("unhandledRejection", (err, promise) =>{
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
})