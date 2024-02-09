const score: Array<number> = [];
const names: Array<string> = [];

function identify(val: boolean | number): boolean | number {
  return val;
}

function identifyTwo(val: any): any {
  return val;
}
function identifyThree<Type>(val: Type): Type {
  return val;
}

// testing using with interface
interface User {
  name: string;
  email: string;
  phone: string;
}

function hell0<User>(val: User): User {
  return val;
}

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class sellable<T> {
  public cart: T[] = [];
  addToCart(products: T) {
    this.cart.push(products);
  }
}
