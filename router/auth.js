const { Router } = require('express');
const express = require('express');
const User = require('../model/userSchema');
const router = express.Router();

require('../db/conn');


router.get('/', (req, res) => {
    res.send(`Hello World from upside down`);
});

router.post('/register',async (req, res) => {

    const { name, email, phone, event, password } = req.body;
    if (!name || !email || !phone || !event || !password) {
        return res.status(422).json({ error: "pls fill the required fields" })
    }
    try{

        const userExist = await User.findOne({ email: email })

        if (userExist) {
            return res.status(422).json({ error: "email already exists" });
        }

        const user = new User({ name, email, phone, event, password });

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