// for off

// let arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
    
// }

//

// const greetings = "hello world!"
// for (const greet of greetings){
//     if(greet === ' '){
        
//         continue
//     }
//     console.log(greet);
// }

//map

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key,value] of map) {
    console.log(key,'=', value);
    
}

// const myObject={
//     anime1: "onepiece",
//     anime2: "naruto",
// }

// for (const [key, value] of myObject) {

//     console.log(key, '=>' ,value );                        // (for of) is not used in object (for in) is used in objects
    
// }