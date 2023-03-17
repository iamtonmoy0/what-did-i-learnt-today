document.getElementById('submit').addEventListener('click',function(){
const getEmail =document.getElementById('email');
const email= getEmail.value;
const getPass =document.getElementById('pass');

const passl = getPass;
if (email === 'you@gmail.com' &&  passl === 12345){
	console.log('welcome to bank')
}else{
	console.log('you are not authorized')
}


})