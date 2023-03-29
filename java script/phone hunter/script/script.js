const loadPhones=async(searchText)=>{
	const url=` https://openapi.programming-hero.com/api/phones?search=${searchText}`
	const res= await fetch(url);
	const data= await res.json();
	displayPhone(data.data)
}
const displayPhone=phones=>{
	const phoneContainer = document.getElementById('phone-container')
	phoneContainer.textContent='';
	//display phone
	phones= phones.slice(0,3)
	phones.forEach(phone => {
		const phoneDiv= document.createElement('div')
		phoneDiv.classList.add('col')
		phoneDiv.innerHTML=` <div class="card ">
            <img src="${phone.image}" class="card-img-top" alt="..." s>
            <div class="card-body">
              <h5 class="card-title">${phone.phone_name}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            </div>
        </div>`
	phoneContainer.appendChild(phoneDiv);
		
	});
}

document.getElementById('search').addEventListener('click',()=>{
const searchField= document.getElementById('searchField')	
const search = searchField.value;
loadPhones(search)
})



loadPhones();