let size=8;
let board='';
for (let y = 0; y <=size;y++){
	for(let x =0;x<=size;x++){
		if((x+y)%2==0){
			board +="#"
		}else{
			board+=""
		}
	}
	board+="\n"
	
}
console.log(board)
// console.log(16%2)
// it causes time
// but i solved it