const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
app.use(cookieParser());
app.use(express.json());
//const bodyParser = require('body-parser');
//const cors = require('cors');


//app middleware
//app.use(bodyParser.json());
//app.use(cors());

const Port = 8282;

//import routes 
//const postRoutes = require('./routes/posts');

//User Cheat -Start

//const userInput ={
//    username : "nc",
//    password : "123",
//    role : "admin"
//}

//const user = new User(userInput);
//user.save((err,document)=>{
//    if(err)
//    console.log(err);
//    console.log(document);
//});

//User Cheat -End

//app.use(postRoutes);

//const dburl = 'mongodb+srv://nc:nc@cluster0.vsepc.mongodb.net/AuthonticationApp?retryWrites=true&w=majority'
const dburl = 'mongodb+srv://nc123:nc123@cluster0.uadu4.mongodb.net/UserAUTH?retryWrites=true&w=majority'



mongoose.connect(dburl)
.then(() =>{
    console.log('DB Connection is Success !!!')
})
.catch((error) => console.log('DB Connection Error :',error))

const userRouter = require('./routes/User');
app.use('/user',userRouter);

app.listen(Port, () => {

    console.log('App is running on port', Port)

});