const userEmail = []

if(userEmail){
    console.log("got user email");
}

else{
    console.log("dont got user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObject = {}
if (Object.keys(emptyObject).length === 0){
    console.log("object is empty");
}

// Nullish Coalescing Operator (??): null undefined


let val1;
 //val1 = 5 ?? 10

//val1 = null ?? 5
//val1 = undefined ?? 16
//val1 = null ?? 16
//val1 = null ?? 5 ?? 9

console.log(val1);

// Terniary Operator

// condition ? true : false

const animeToyPrice = 1000
animeToyPrice <= 500 ? console.log("less then 500") : console.log("more then 500");



