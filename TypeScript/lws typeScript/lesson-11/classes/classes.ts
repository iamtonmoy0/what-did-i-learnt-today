export class player{
	constructor(	
		readonly name:string,
		private age:number,
		private country:string,
	){}
		play(){
			console.log(`${this.name} is ${this.age} year old from ${this.country}`);
		}
	};