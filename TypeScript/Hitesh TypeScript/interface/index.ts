interface User {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const user: User = {
  name: "John Doe",
  email: "hello",
  phone: "1234567890",
  address: "hehe",
};
user.name;
// access modifiers
class Hello {
  private name: string;
  email: string;
  public phone: string;
}
