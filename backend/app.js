const dotenv = require("dotenv");
const express = require('express');
const app = express();

dotenv.config({path:"./config.env"});

require('./db/conn');

app.use(express.json());

//linked the router files to our main route
app.use(require('./router/auth'));


const PORT = process.env.PORT;


app.listen(PORT,() =>{
    console.log(`server is running at port number ${PORT}`)
})