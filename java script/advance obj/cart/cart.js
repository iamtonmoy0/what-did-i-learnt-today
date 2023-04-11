const addProduct=()=>{
	const productName= document.getElementById('product-name')
	const productQun=document.getElementById('product-quantity')
	const product=productName.value;
	const quantity=productQun.value;
	productName.value='';
	productQun.value='';
	// console.log(product,quantity)
	displayProduct(product,quantity);
}
const displayProduct=(product,quantity)=>{
	const ul=document.getElementById('productContainer')
	const li= document.createElement('li');
	li.innerText=`${product}:${quantity}`;
	ul.appendChild(li)
saveProduct(product,quantity)

}
// get stored shopping cart
const getStored=()=>{
	let cart={};
	const storedCart=localStorage.getItem('cart')
	if(storedCart){
		cart=JSON.parse(storedCart)
	}return cart;
}
const saveProduct=(product,quantity)=>{
	const cart =getStored();
	cart[product]=quantity
	const str=JSON.stringify(cart)
	localStorage.setItem('cart',str)
}
const localData=()=>{
const savedData=	getStored();
for(const product in savedData){
	const quantity=savedData[product]
console.log(product,quantity)
displayProduct(product,quantity)
}
	

}
localData()