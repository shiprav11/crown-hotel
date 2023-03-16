const jwt = require('jsonwebtoken');
const express = require('express')
const router = express.Router();
const authenticate = require("../db/middleware/authenticate");
const User = require("../model/userSchema");

const bcrypt = require("bcryptjs")
const nodemailer = require("nodemailer");
const User6 = require('../model/userSchema3');


// var email=req.body.email

//middleware
const middleware = (req, res, next) => {
  console.log(`hello`)
  // next();
}
middleware();
console.log("test")

router.get('/', (req, res, next) => {
  res.send('Hellow wprld router');
  next()
})


//registration

router.post('/register', async (req, res) => {
  const { name, email, password, cpassword } = req.body;
  
  if (!name || !email || !password || !cpassword) {
    return res.status(422).json({ error: "Please Enter Values" });
  }

  
  const user = new User({ name, email, password, cpassword });
  try {
    await user.save()
    res.status(201).json({ user, meassage: "user registered suceessfully" });


  } catch (error) {
    return res.status(422).json({ error: "Failed to register" });

  }
});

//login route
router.post('/sign-in', async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please fill details" })
    }

    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true
      });
    }

    
    if (!userLogin) {
      res.status(400).json({ error: "user error" });
    }
    else {
      res.json({ message: "User Logged in successfully" });
    }

  }
  catch (err) {
    console.log(err);
  }

})
router.get('/Logout', (req, res) => {
  console.log((`Hello my logout page`))
  res.clearCookie('jwtoken', { path: '/' })
  res.status(200).send('User Logout')
});



//update password

router.put('/pdatepass', async (req, res) => {
  
  const { oldPassword, newPassword } = req.body;


  const user = await User.findOne({ email: req.body.email });
  if (user.password !== oldPassword) {
    return res.status(401).json({ message: "Invalid password" });
  }


  const update = await User.findOneAndUpdate(
    { email: req.body.email },
    { password: newPassword, cpassword: newPassword },
  );

  return res.status(200).json({ update, message: "Password changed successfully" });
});





//email notification

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  secure: true,
  auth: {
    user: "otusonellp@gmail.com",
    pass: "vmljuhppnafmijja",
  },
});

contactEmail.verify((error) => {  
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const phone = req.body.phone;
  const email = req.body.email;
  const subject = req.body.subject;
  const company = req.body.company;
  const message = req.body.message;
  const mail = {
    from: fname,
    to: "otusonellp@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>fname: ${fname}</p>
             <p>lname: ${lname}</p> 
             <p>phone: ${phone}</p>
             <p>email: ${email}</p>
             <p>subject: ${subject}</p>
             <p>company: ${company}</p>
             <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});
////booking

router.post('/', async (req, res) => {
  const {  guestName,checkInDate,checkOutDate,adults,children,rooms} = req.body;
  
  if (!guestName || !checkInDate || !checkOutDate || !adults || !children || !rooms) {
    return res.status(428).json({ error: "Please Enter Values" });
  }

  
  const usera = new  User6({ guestName,checkInDate,checkOutDate,adults,children,rooms});
  try {
    await usera.save()
    res.status(208).json({ usera, meassage: "user registered suceessfully" });


  } catch (error) {
    return res.status(428).json({ error: "Failed to register" });

  }
});










module.exports = router;