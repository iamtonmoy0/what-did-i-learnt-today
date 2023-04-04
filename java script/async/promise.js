const pro= new Promise((resolve,reject)=>{
let num= Math.random()*10;
console.log(num)
if (num<5){
	resolve(20000)
}else{
	reject('nodata ')
}
	
})

pro
.then(data=>console.log(data+1))
.catch(err => console.error('Err:',err))