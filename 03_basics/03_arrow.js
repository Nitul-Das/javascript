const user = {
    username: "nitul",
    price: 999,
    
    welcomeMessage: function() {

        console.log(`${this.username}, welcome to the website`);
        console.log(this);

    }
}

//user.welcomeMessage()
//user.username = "das"
//user.welcomeMessage()

//console.log(this);   // output={} empty but in browser it will be different

//function neeoh(){

//    let username = "nitul"
//    console.log(this.username);  //
// }

//neeoh()


//const neeoh = function(){

    //    let username = "nitul"
    //    console.log(this.username);  // only can be used in objects
    // }

const neeoh = () =>{

            let username = "nitul"
           console.log(this);  // arrow functions gives {}
        }

//neeoh()


//** explicit return and implicit return **/

//const addTwo = (num1, num2) =>{
    //return num1+num2                    //** */ must write return keyword if used curly braces
//}

//const addTwo = (num1, num2) => (num1+num2)   //** */ no need to write return keyword 


//console.log(addTwo(3,4));

/** how to return object */

const addTwo = (num1, num2) => ({username: "das"})

console.log(addTwo(3,4));





