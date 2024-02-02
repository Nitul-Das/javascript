//var c = 300 // outside data is global scope 
                // the data in global scope can be accessed under block scope
let a = 300
if(true){
    let a = 1
    const b = 2    // inside if data is block scope
    var c = 3     // data inside block scope shouldn't leak outside

    //console.log("value of a:", a);
}

//console.log(a);
//console.log(b);
//console.log(c);


// note: the global scope that we use in browser is different from the scope we use in the code environment

function one(){
    const username = "nitul"

    function two(){
        const website = "youtube"
        console.log(username);   
    }
    //console.log(website);
    //two()
}

//one()