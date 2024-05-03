const express = require('express');
const app = express();

// const myMiddleware=(req,res,next)=>{
// 	console.log('loading')
// 	next()
// }
// app.use(myMiddleware)
// app.use(myMiddleware)


app.get('/',(req,res)=>{
	res.send('hello world')
})

app.listen(3000 ,console.log('server is running on port 3000'));
