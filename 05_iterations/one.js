//for

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     if(element == 5){
//         console.log("5 is the best number");
//     }
//     console.log(element);
// }

// for (let i = 1; i < 10; i++) {
//     console.log(`outervalue ${i}` );

//     for (let j = 1; j < 10; j++) {
//         //console.log(`Inner value${j} inner value${i}`); 
//         console.log(i + "*" + j + "=" + i*j);  
//     }
    
// }

// let myArray = ["hanuman", "shree_krishna", "shree_ram"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }


//break and continue

// for (let index = 1; index <= 20; index++) {

//     if(index == 5){
//         console.log("detected");
//         break
//     }
    

//     console.log(`value is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {

    if(index == 5){
        console.log("detected");
        continue
    }
    

    console.log(`value is ${index}`);
    
}