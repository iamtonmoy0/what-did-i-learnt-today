type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
function feed(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "fish food";
  } else {
    pet;
    return "bird food";
  }
}
// type narrowing
interface Circle {
  kind: "circle";
  radius: number;
}

interface Squire {
  kind: "squire";
  side: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Circle | Squire;
