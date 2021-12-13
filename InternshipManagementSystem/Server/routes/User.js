const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');
const User = require('../models/User');

const signToken = userID =>{
    return JWT.sign({
        iss : "NoobCoder",
        sub : userID
    },"NoobCoder",{expiresIn : "1h"});
}

//Registration
userRouter.post('/register',(req,res)=>{
    const { email,password,role } = req.body;
    User.findOne({email},(err,user)=>{
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        if(user)
            res.status(400).json({message : {msgBody : "Email is already taken", msgError: true}});
        else{
            const newUser = new User({email,password,role});
            newUser.save(err=>{
                if(err)
                    res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
                else
                    res.status(201).json({message : {msgBody : "Account successfully created", msgError: false}});
            });
        }
    });
});

userRouter.post('/login',passport.authenticate('local',{session : false}),(req,res)=>{
    if(req.isAuthenticated()){
       const {_id,email,role} = req.user;
       const token = signToken(_id);
       res.cookie('access_token',token,{httpOnly: true, sameSite:true}); 
       res.status(200).json({isAuthenticated : true,user : {email,role}});
    }
});

userRouter.get('/logout',passport.authenticate('jwt',{session : false}),(req,res)=>{
    res.clearCookie('access_token');
    res.json({user:{email : "", role : ""},success : true});
});

userRouter.get('/admin',passport.authenticate('jwt',{session : false}),(req,res)=>{
    if(req.user.role === 'admin'){
        res.status(200).json({message : {msgBody : 'You are an admin', msgError : false}});
    }
    else
        res.status(403).json({message : {msgBody : "You're not an admin,go away", msgError : true}});
});

userRouter.get('/student',passport.authenticate('jwt',{session : false}),(req,res)=>{
    if(req.user.role === 'student'){
        res.status(200).json({message : {msgBody : 'You are an student', msgError : false}});
    }
    else
        res.status(403).json({message : {msgBody : "You're not an student,go away", msgError : true}});
});

userRouter.get('/evaluator',passport.authenticate('jwt',{session : false}),(req,res)=>{
    if(req.user.role === 'evaluator'){
        res.status(200).json({message : {msgBody : 'You are an evaluator', msgError : false}});
    }
    else
        res.status(403).json({message : {msgBody : "You're not an evaluator,go away", msgError : true}});
});

userRouter.get('/supervisor',passport.authenticate('jwt',{session : false}),(req,res)=>{
    if(req.user.role === 'supervisor'){
        res.status(200).json({message : {msgBody : 'You are an supervisor', msgError : false}});
    }
    else
        res.status(403).json({message : {msgBody : "You're not an supervisor,go away", msgError : true}});
});

userRouter.get('/authenticated',passport.authenticate('jwt',{session : false}),(req,res)=>{
    const {email,role} = req.user;
    res.status(200).json({isAuthenticated : true, user : {email,role}});
});

userRouter.post('/forgotpassword'),passport.authenticate('local',{session : false}),(req,res)=>{
    //res.send("Forgot Password Route");
    const {email} = req.body;

    try {
        const user = User.findOne({email});

        if(!user) {
            return next(new ErrorResponse("Email could not be sent", 404));
        }

        const resetToken = user.getResetPasswordToken();

        user.save();

        const reseturl = `http://localhost:3000/passwordreset/${resetToken}`;

        const message = `
            <h1>You have requested a password reset</h1>
            <p> Please go to this link to reset your password </p>
            <a href=${reseturl} clicktracking=off>${reseturl}</a>
        `
        try {
            sendEmail({
                to: user.email,
                subject: "Please Reset Request",
                text: message
            });
            res.status(200).json({ success: true, data: "Email Sent"});
        } catch (error) {
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;

            user.save();

            return next(new ErrorResponse("Email could not be send", 500))
        }

    } catch (error) {
        next(error);
    }
};

userRouter.put('/resetpassword/:resetToken'),passport.authenticate('local',{session : false}),(req,res)=>{
    //res.send("Reset Password Route");
    // Compare token in URL params to hashed token
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(req.params.resetToken)
      .digest("hex");
  
    try {
      const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
      });
  
      if (!user) {
        return next(new ErrorResponse("Invalid Token", 400));
      }
  
      user.password = req.body.password;
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
  
      user.save();
  
      res.status(201).json({
        success: true,
        data: "Password Updated Success",
        token: user.getSignedJwtToken(),
      });
    } catch (err) {
      next(err);
    }
};

module.exports = userRouter;