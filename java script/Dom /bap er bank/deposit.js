document.getElementById('btn-deposit').addEventListener('click',function(){


	const newDeposit= document.getElementById('deposit-field')
	const depositAmount =newDeposit.value
	const stringified= parseFloat(depositAmount)
	
	const previousDeposit =document.getElementById('deposit')
const previousDepositAmount = previousDeposit.innerText;
const str = parseFloat(previousDepositAmount)
const total = stringified +str

previousDeposit.innerText= total

	
})