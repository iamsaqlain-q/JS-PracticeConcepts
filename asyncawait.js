import fetch from "node-fetch";
console.log('Async Await');

async function myFunc() {
    console.log('Inside myFunc');
    const response = await fetch('https://api.github.com/users');
    console.log('Before response');
    const users = await response.json();
    console.log('users resolved');

    return users;
}

console.log('Before calling myFunc');
let a = myFunc();
console.log('After calling myFunc');
console.log(a);
a.then(data => console.log(data))
console.log('Last line of this asyncawait.js file');