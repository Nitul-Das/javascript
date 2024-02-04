/*An IIFE(immediately invoked function expression) is a function that is use to immediately execute after it is defined.
it is used as global scope gives problem.it saves the function to get pollute from the global scope */

//named IIFE//
(function nitul(){
    console.log(`database connected`);
})();

//unamed IIFI//
((name) => {
    console.log(`database connected two ${name}`);
})("nitul");