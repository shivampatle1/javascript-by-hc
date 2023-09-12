//primitive (call by value)

// 7 type: String, Number, Boolean, null, undefined,Symbol,BigInt


const score =100

const scoreValue = 100.3

const isLoggedIn=false
const outsideTemp =null
let userEmail; //(undefined)


const id =Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);


const bigNumber = 3086643674636459846n


//refrence type (non primitive)

//array, Object, Function

//array example 

const heros =["shaktiman", "naagraj" , "doga"]  

//object example

let object= {
    name:"shivam",
    age:17
}

//function example

const myfunction = function(){
    console.log("hello world");
}

console.log(typeof myfunction);