class player{
	name:string;
	age:number;
	country:string;

	// constructor
	constructor(n:string ,a:number, c:string){
		this.name=n;
		this.age=a;
		this.country=c
	}
	play(){
		console.log(`${this.name} is ${this.age} year old from ${this.country}`);
	}
};
const mashrafi=new player('mashrafi',40,'BD')
const sakib=new player('sakib',30,'BD')

const players:player[]=[]; //array as class ..class is validating the type of input
players.push(mashrafi)