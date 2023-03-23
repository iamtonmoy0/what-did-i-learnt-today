function LoadUser(){
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(res => res.json())
	.then(data => Api(data))
}

function Api(data){
const ul = document.getElementById('ul')
for(const user of data){
		const li = document.createElement('li');
	li.innerText= user.name;
	ul.appendChild(li)
}

}