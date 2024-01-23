const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["flash", "batman", "superman"]

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
//console.log(all_new_heroes);


let myArray = [1, 2, 3, [4, 5], 6, 7, [8, 9]]
let anotherArray = myArray.flat(Infinity)
//console.log(anotherArray);

console.log(Array.isArray("Nitul"))
console.log(Array.from("Nitul"))
console.log(Array.from({name: "Nitul"})) // interesting

let score1 = 10
let score2 = 20
let score3 = 30

console.log(Array.of(score1, score2, score3));

