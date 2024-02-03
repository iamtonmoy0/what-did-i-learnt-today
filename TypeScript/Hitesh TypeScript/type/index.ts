type User = {
  readonly _id: string;
  name: string;
  email: string;
  phone: string;
};

let user: User = {
  _id: "1235",
  name: "tonmoy",
  email: "tonmoy",
  phone: "01215545",
};
user.name = "hello";
// readonly property
user._id = "123";
