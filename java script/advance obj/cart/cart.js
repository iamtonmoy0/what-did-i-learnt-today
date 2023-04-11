const addProduct=()=>{
	const productName= document.getElementById('product-name')
	const productQun=document.getElementById('product-quantity')
	const product=productName.value;
	const quantity=productQun.value;
	productName.value='';
	productQun.value='';
	// console.log(product,quantity)
	displayProduct(product,quantity)
}
const displayProduct=(product,quantity)=>{
	const ul=document.getElementById('productContainer')
	const li= document.createElement('li');
	li.innerText=`${product}:${quantity}`;
	ul.appendChild(li)

}