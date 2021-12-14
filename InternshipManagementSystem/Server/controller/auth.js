const crypto = require('crypto');
const User =  require('../models/User');
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require('../utils/sendEmail');


exports.forgeotpassword = async (req, res, next) => {
    //res.send("Forgot Password Route");
    const {email} = req.body;

    try {
        const user = await User.findOne({email});

        if(!user) {
            return next(new ErrorResponse("Email could not be sent", 404));
        }

        const resetToken = user.getResetPasswordToken();

        await user.save();

        const reseturl = `http://localhost:3000/passwordreset/${resetToken}`;

        const message = `
            <h1>You have requested a password reset</h1>
            <p> Please go to this link to reset your password </p>
            <a href=${reseturl} clicktracking=off>${reseturl}</a>
        `
        try {
            await sendEmail({
                to: user.email,
                subject: "Please Reset Request",
                text: message
            });
            res.status(200).json({ success: true, data: "Email Sent"});
        } catch (error) {
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;

            await user.save();

            return next(new ErrorResponse("Email could not be send", 500))
        }

    } catch (error) {
        next(error);
    }
};

exports.resetpassword = async (req, res, next) => {
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
  
      await user.save();
  
      res.status(201).json({
        success: true,
        data: "Password Updated Success",
        token: user.getSignedJwtToken(),
      });
    } catch (err) {
      next(err);
    }
  };

