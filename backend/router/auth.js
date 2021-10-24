const { Router } = require('express');
const express = require('express');
const User = require('../model/userSchema');
const router = express.Router();
const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey('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')

// require('../models/conn');


router.get('/', (req, res) => {
    res.send(`Hello World from upside down`);
});

router.post('/register',async (req, res) => {

    const { name, email, phone, eventname } = req.body;
    if (!name || !email || !phone || !eventname ) {
        return res.status(422).json({ error: "pls fill the required fields" })
    }
    try{

        const userExist = await User.findOne({ email: email })

        // if (userExist) {
        //     return res.status(422).json({ error: "email already exists" });
        // }

        const user = new User({ name, email, phone, eventname  });

        await user.save();

        res.status(201).json({ message: "registration successful" }); 

        // if(userRegister){
        //     return res.status(201).json({ message: "registration successful" });    
        // }else{
        //     res.status(422).json({ error: "failed to register"})
        // }


    }catch(err) {
        console.log(err);
    }

    
    // const msg = {
    //   to: `${email}`, // Change to your recipient
    //   from: 'pals55002@gmail.com', // Change to your verified sender
    //   subject: 'Bed Booking Approved',
    //   text: `Your booking request has been approved by the ${hospital_name}`,
    //   html: `<strong>${user_name} Your Bed booking request has been approved by the ${hospital_name}</strong>`,
    // }
  
  
    // sgMail
    //   .send(msg)
    //   .then((response) => {
    //     console.log(response[0].statusCode)
    //     console.log(response[0].headers)
    //   })
    //   .catch((error) => {
    //     console.error(error)
    //   })


});

module.exports = router;


// Using promises

// router.post('/register', (req, res) => {

//     const { name, email, phone, event, password } = req.body;
//     if (!name || !email || !phone || !event || !password) {
//         return res.status(422).json({ error: "pls fill the required fields" })
//     }

//     User.findOne({ email: email })
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: "email already exists" });
//             }
//             const user = new User({ name, email, phone, event, password });

//             user.save().then(() => {
//                 return res.status(201).json({ message: "registration successful" });
//             }).catch((err) => res.status(422).json({ error: "failed to register" }));
//         }).catch(err => { console.log(err); });


// });