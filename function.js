class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(this.name + "Hello");
    }

    sayAge() {
        console.log("My age is" + this.age);
    }
}