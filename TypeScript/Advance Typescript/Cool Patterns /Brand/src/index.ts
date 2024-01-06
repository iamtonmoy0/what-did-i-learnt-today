import { Brand } from "./helpers/brand";

type Email = Brand<string, "Email">;
type Password = Brand<string, "Password">;

const password = "12345621" as Password;

const email = "tonmoy@gmail.com" as Email;
// console.log(password, email);

let passwordSlot: Password;
passwordSlot = "1234564" as Password;

// console.log(passwordSlot);

// functional system
