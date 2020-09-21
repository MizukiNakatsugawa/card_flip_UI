// import {Human} from './function.js';

console.log("hello");



const person = {
    name : "Bob",
    age : 22
};

console.log(person.name);

const func = (selecter) => {
    const val = person[selecter];
    console.log(val);
}

func("name");