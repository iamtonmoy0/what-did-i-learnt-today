const express = require('express')
const cookieParser=require('cookie-parser') 
const app = express()
app.use(express.json());
app.use(cookieParser())

const adminRoute=express.Router();
adminRoute.get('/admin',(req,res)=>{
  console.log(req.cookies)
  res.send('this is admin route')
})
app.use('/dashboard',adminRoute)
app.get('/', (req, res) => {
  console.log(req)
  res.send('hello world')
})

app.listen(3000,console.log('running on port :3000'));