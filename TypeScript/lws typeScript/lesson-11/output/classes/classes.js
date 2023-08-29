export class player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} is ${this.age} year old from ${this.country}`);
    }
}
;
