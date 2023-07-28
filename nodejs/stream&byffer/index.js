const fs=require('fs');


const readStream=fs.createReadStream(`${__dirname}/data.txt`,'utf-8') //creating a stream& utf 8 is a encoding system

readStream.on('data',(chunk)=>{
console.log(chunk)  //printing the chunk
})