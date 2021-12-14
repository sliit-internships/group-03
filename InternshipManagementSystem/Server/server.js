require('dotenv').config({path: "./config.env"});
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const express = require("express");
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

//Connect DB
connectDB();

const app = express();
//routes
const formI1ARoutes=require("./routes/FormI1ARoutes");
const formI1CRoutes=require("./routes/FormI1CRoutes");
const formI1BRoutes=require("./routes/FormI1BRoutes");
const formI5ARoutes=require("./routes/FormI5ARoutes");
const formI3AOnlineRoutes=require("./routes/FormI1BOnlineRoutes");
//middleware
app.use(express.json());

// Configuring middlewares
app.use(express.static('public')); //to access the files in public folder
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use(fileUpload());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/private', require('./routes/private'));

// Configuring routes
app.use("/api/formI1A", formI1ARoutes.router);
app.use("/api/formI1C", formI1CRoutes.router);
app.use("/api/formI1B", formI1BRoutes.router);
app.use("/api/formI5A", formI5ARoutes.router);
app.use("/api/formI1BOnline", formI3AOnlineRoutes.router);

// file upload api
app.post('/api/upload', (req, res) => {

  if (!req.files) {
    return res.status(500).send({ msg: "file is not found" })
  }
  // accessing the file
  const myFile = req.files.file;

  //  places the file inside public directory
  myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
    if (err) {
      console.log(err)
      return res.status(500).send({ msg: "Error occured" });
    }
    // returing the response with file path and name
    return res.send({name: myFile.name, path: `/${myFile.name}`});
  });
})

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