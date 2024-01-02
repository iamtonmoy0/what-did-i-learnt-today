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
const unknown = (...score: number[]): number => {
  let sum: number = 0;
  score.map((n) => {
    sum += n;
  });
  return sum;
};

// console.log(unknown(1,2,2,3,4,5,6,7,8));

// alias
type newNum = number | string;
const st: newNum = "hello";

type heroType = {
  name: string;
  age: number;
};
const person: heroType = {
  name: "hello",
  age: 12,
};
// interfaces

interface typeInt {
  name: string;
  age: number;
}
const user: typeInt = {
  name: "tonmoy",
  age: 21,
};

// union and intersection
type heroA = {
  name: string;
  age: number;
};
type heroB = heroA & {
  salary: number;
  position: string;
};

const heroUser: heroB = {
  name: "tonmoy",
  age: 12,
  salary: 20000,
  position: "manager",
};
// console.log(heroUser);
//null
const testsNull = (name: string | null): void => {
  if (name === null) {
    return console.log("it is null");
  }
};
// console.log(testsNull(null));

//turnery operator
const book: boolean = true;
const ticket: string = book ? "yes" : "no";
// console.log(ticket);

// Type assertion
const think: unknown = 34.12448;
console.log((think as number).toFixed(2));

// conditionals
type A = 12;
type B = A extends boolean ? string : null;

// map

