const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config();
const port = process.env.PORT

mongoose.connect(process.env.DB).then(()=>{console.log('db connected')})

app.get('/',(req,res)=>{
	res.send('hello')
})

app.listen(port,console.log(`server is running on port ${port}`))