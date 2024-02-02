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

function loginUserMessage(username="sam"){
    
   if(!username){
    console.log("please enter a username");
    return
   }


    return `${username} is logged in `
}

console.log(loginUserMessage("nitul"));
console.log(loginUserMessage("das"));  // when we dont give any value it shows undefined

function calculateCartPrice(val1,val2,...numb1){
  return numb1
}

console.log(calculateCartPrice(200, 300, 4000));


const user = {
  name: "nitul",
  price: 199,

}

function handleObject(anyobject){
  console.log(`name is ${anyobject.name} price is ${anyobject.price}`);
}

handleObject(user)


const myNewArray =[200, 400, 300]

function returnSecondValue(getarray){
  return getarray[1]
}

console.log(returnSecondValue(myNewArray));