const express = require('express');
const User = require('../model/userSchema');
const router = express.Router();



router.post('/register',async (req, res) => {

    const { name, email, phone, eventname } = req.body;
    if (!name || !email || !phone || !eventname ) {
        return res.status(422).json({ error: "pls fill the required fields" })
    }
    try{

       

        const user = new User({ name, email, phone, eventname  });

        await user.save();

        res.status(201).json({ message: "registration successful" }); 

       


    }catch(err) {
        console.log(err);
    }

    
   

});

module.exports = router;


