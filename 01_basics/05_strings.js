let fullName = "nitul das"
let userId = 14

//console.log(`my name is ${fullName} and my id is ${userId}`);

const gameName = new String("nituldas-oi-ui")
//console.log(gameName.length);
//console.log(gameName.toLocaleUpperCase());
//console.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('t'));
const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   nitul   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nitul.com/nitul%20das"
console.log(url.replace('%20', '-'));

console.log(url.includes("nitul"));
console.log(gameName.split('-'));