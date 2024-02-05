let score: number | string = 30;

score = "20";

type User = {
  name: string;
  role: string;
};

type Admin = {
  username: string;
  role: string;
};

const me: User | Admin = { name: "Tonmoy", role: "admin" };
me = { username: "hello", role: "ok" };
console.log(me);

// array
const hello: (number | string)[] = [1, 3, 4, 6, "hello"];
