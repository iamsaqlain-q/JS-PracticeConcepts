const person = {
    firstName: 'Mark',
    lastName: 'Zuckerberg'
};


// using spread ...
let p1 = {
    ...person
};
console.log('Copy using spread : ', person);

// using  Object.assign() method
let p2 = Object.assign(person); //person is source and p2 is target
console.log('Copy using Object.assign() : ', person);

// using JSON
let p3 = JSON.parse(JSON.stringify(person));//object - string - object
console.log('Copy using JSON : ', person);