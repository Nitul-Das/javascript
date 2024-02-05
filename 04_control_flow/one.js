const isUserLoggedIn = true

//     >, <, <=, >=, == (equal),!=  (not equal)    //

//    *strict checking*   //
//    === (also checks data type),!==       // 

const temperature = 50

//if(temperature === 50){

//    console.log("temperature is less then 50");
//}

// else{
//   console.log("temperature is more then 50");
// } 

const score = 200

//if(score > 100) {
  //  const power = "fly"
  //  console.log(`User power: ${power}`);
// }

const balance = 1000

// if(balance < 500){
//     console.log("less than 500");
// }

// else if(balance < 100){
//     console.log("less than 100");
// }


// else if(balance < 800){
//     console.log("less than 800");
// }

// else{
//     console.log("less than 1600");
// }


const userLoggedIn = true
const debitCard = true
const loginFromGoogle = false
const loginFromEmail = true

if(userLoggedIn && debitCard && 2==3){           // meaning of && = and //
    console.log("user is logged in")
}

if(loginFromGoogle || loginFromEmail){          // meaning of || = or //
    console.log("user is logged in");
}

