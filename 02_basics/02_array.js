const Indian_names=["nutan", "Rakesh", "Deeptesh"]
const Indian_surnames=["khairwar" , "Meshram" , "Patle"]

//Indian_names.push(Indian_surnames)
//console.log(Indian_names);

//const fullname=Indian_names.concat(Indian_surnames)
//console.log(fullname);

const fullname =[...Indian_names,...Indian_surnames] ///spread oprater
console.log(fullname);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Shivam")); //checking array or not
console.log(Array.from("Shivam")); //convert into array
console.log(Array.from({name: "shivam"}));//kiska array banana hai pta nhi tha isliye empty array diya
let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));