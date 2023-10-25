const {readdirSync,writeFileSync} = require('fs')
const path = require('path')


const dir = path.join(__dirname,'./models/Academic');
const fileName = readdirSync(dir);
const writeDir = path.join(__dirname,'./services/academic')

fileName.forEach(file=>{
	const name = file.split("model").join('services')
	const model = path.join(dir , file)
	const controller = path.join(writeDir,name)
	console.log(name)

	writeFileSync(controller,model)
})
// read files form one foulder and modify it and write it to another one