document.getElementById('submit').addEventListener('click',function(){
const getEmail =document.getElementById('email');
const email= getEmail.value;
const getPass =document.getElementById('pass');

const passl = getPass.value;
if (email === 'you@gmail.com' &&  passl === 'hello'){
	window.location.href='main.html';
}else{
	console.log('you are not authorized')
}


})