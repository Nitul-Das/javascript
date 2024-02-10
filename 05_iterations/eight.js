const myNums = [1, 2,3]

const mytotal = myNums.reduce((accumulator, currentValue)=>{
    console.log(`acc:${accumulator} and curr:${currentValue}`);                                      //type1
    return accumulator + currentValue
},0)

console.log(mytotal);

// const mytotal = myNums.reduce((accumulator, currentValue) => accumulator + currentValue,           //type2
// 0) 


// console.log(mytotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const price = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(price);