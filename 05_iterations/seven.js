//  const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map((num) => num + 10)
// console.log(newNums);

// const values = []
// myNumbers.forEach((num)=>{
//     values.push(num + 10);                        // using for each
// })

// console.log(values);


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNumbs = myNumbers
                .map((num) => num * 10)
                .map((num) => num + 1)                        //second map will use the output of first map
                .filter((num) => num <= 40)
console.log(newNumbs);