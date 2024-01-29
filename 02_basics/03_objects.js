// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)   //to access objects//
console.log(JsUser["email"])   //another way//
console.log(JsUser["full name"])
console.log(JsUser[mySym])   //to put a symbol in an object//

JsUser.email = "hitesh@chatgpt.com" //update email//
Object.freeze(JsUser) //freeze update//
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // this. is used to access the name from object//
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());