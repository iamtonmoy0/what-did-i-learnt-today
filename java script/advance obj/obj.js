// object letarel

const obj={};


const student={
	name:"kodom",
	age:32,
	friend:["rahim","karim","babul"],
	exam:function(){
		console.log(this.name,"he is good")

	}
}
student.exam();