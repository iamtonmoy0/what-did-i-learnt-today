const http=require('http');




const server=http.createServer((req,res)=>{
	if(req.url==='/'){
		res.write(' server is running ')
		res.end()
	}
})

server.listen(3000)
console.log('running o port 3000 .')