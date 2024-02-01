//function sayMyName(){
//    console.log("N");
//    console.log("i");
//    console.log("t");
//    console.log("u");
//    console.log("l");
//}

//sayMyName()

//function addTwoNumbers(number1, number2){
  //  console.log(number1 + number2);
//}

function addTwoNumbers(number1, number2){
        return number1 + number2              // to store in variable we use return
}                                             // after return we cannot execute 

let result = addTwoNumbers(8, 8)
console.log("result:", result);

function loginUserMessage(username){
    return `${username} is logged in `
}

console.log(loginUserMessage("nitul"));
console.log(loginUserMessage());  // when we dont give any value it shows undefined

