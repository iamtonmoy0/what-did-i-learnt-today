// array
const hello: string[] = ["hello", "world"];
const num: number[] = [1, 2, 3, 4, 5, 6];
const multiple: (string | number | boolean)[] = ["std", 10, false];
// tuple
const userTuple: [number, string] = [1, "Tom"];
// object
const details: {
  name: string;
  readonly age: number;
  profession: string;
  isMarried?: boolean;
} = {
  name: "John",
  age: 21,
  profession: "job",
  //   isMarried: true,
};

// spread operator
const arr1: string[] = ["john", "david", "backm"];
const arr2: string[] = ["ronaldo", "nymer", "messi"];
arr1.push(...arr2);
// console.log(arr1);

// rest parameter
const unknown=()=>{
	
}
