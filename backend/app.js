const dotenv = require("dotenv");

const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:"./config.env"});

require('./backend/conn');

app.use(express.json());

//linked the router files to our main route
app.use(require('./router/auth'));


const PORT = process.env.PORT;


// const User = require('./model/userSchema');  importing schema




// Middleware


const middleware = (req,res,next)=>{
    console.log(`middleware is working`);
    next();
}




app.get('/', (req,res)=>{
res.send(`Hello World`);
});

app.get('/about',middleware, (req,res)=>{
    console.log(`heloo my about`);
    res.send(`Hello World about to sleep`);
    });

app.get('/contact', (req,res)=>{
    res.send(`Hello World gonna contact`);
    });
app.get('/signin', (req,res)=>{
    res.send(`Hello World please sign in`);
    });
app.get('/signup', (req,res)=>{
    res.send(`Hello World signup first bruh`);
    });


app.listen(PORT,() =>{
    console.log(`server is running at port number ${PORT}`)
})