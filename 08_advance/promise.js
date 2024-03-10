let promiseOne = new Promise(function(resolve, reject){

    setTimeout(() => {
        console.log("Async task is completed");
        resolve()
    },1000);
    
})

promiseOne.then(function () {
    console.log("promise created");    
})

new Promise(function(resolve, reject){

    setTimeout(() => {
        console.log("Async task is completed");
        resolve()
    },1000);
    
}).then(function () {
    console.log("promise created");    
})



let promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("task completed");
        resolve({
            name: "nitul das",
            roll: 7032,
        })
    }, 1000);
})

promiseThree.then(function (moi) {
    console.log(moi);
})


let promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        
    }, 2000);
    
})