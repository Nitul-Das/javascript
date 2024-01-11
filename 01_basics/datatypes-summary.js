// premitive datatypes

const score = 33
const scoreValue = 33.6

const isLogIn = true
const outsideTemp = null
let userEmail;
const bigNumber = 2343545534356262773636726222n
console.log(typeof bigNumber);

let id = Symbol('123')
let anotherId = Symbol('123')

console.log('id'==='anotherId');

//non-primitive(Reference)

const names = ["nitul","das"]; 

let myObj ={

    year:2001,
    age:23,
}

let myFunction = function(){
    console.log("hello world");
}

console.log(typeof names);
console.log(typeof myObj);
