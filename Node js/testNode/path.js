// const path=require('path')
// const myPath='/home/edith/Desktop/code/practice/what-did ilearn/nodejs/testNode/index.js'
// console.log(path.parse(myPath))
// const os=require('os');
// console.log(os.platform())

const EventEmmiter=require('events')

const emitter=new EventEmmiter();

emitter.on('bell-ring',(data)=>{
	console.log(`the class has finished .${data}`)
})

emitter.emit('bell-ring','second period has ended')