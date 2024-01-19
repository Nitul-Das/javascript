let myDate = new Date()
//console.log(myDate);
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(typeof myDate);

let myAnotherDate = new Date(2023, 0, 16,)
//console.log(myAnotherDate.toDateString());
let myOtherDate = new Date(2023, 0, 16, 5, 30)
//console.log(myOtherDate.toLocaleString());
let myAnDate = new Date("01-16-2023")
//console.log(myAnDate.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
console.log(myOtherDate.getTime());
console.log(Math.floor(Date.now()/1000));
