class player{
constructor(	
	readonly name:string,
	private age:number,
	private country:string,
){}
	play(){
		console.log(`${this.name} is ${this.age} year old from ${this.country}`);
	}
};
const mashrafi=new player('mashrafi',40,'BD')
const sakib=new player('sakib',30,'BD')

console.log(mashrafi.name);