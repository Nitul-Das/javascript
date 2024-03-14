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

        let error = false;
        if (!error) {
            resolve({
                username: "nitul",
                roll: 7032,
            })
            
        } else {
            reject("Error: something is wrong")      
        }
        
    }, 2000);
    
})

promiseFour.then((user)=>{
    console.log(user);
    return(user.username)
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
})