function sayMyname(){
console.log("S");
console.log("H");
console.log("V");
console.log("A");
console.log("M");
}
//sayMyname()

function addTwoNumber(number1, number2){
    console.log(number1+number2);
    return number1+number2
}

//const result =addTwoNumber(5,6)
//console.log("result:",result);



function logginUserMesssage(username){
    if (username===undefined) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(logginUserMesssage("Shivam"));
//console.log(logginUserMesssage())

function calculateCartPrice(...num1) //yha par 3 dot hai wo  rest hai wo array bna deta hai
{
    return num1
}

//console.log(calculateCartPrice(100,200,500,2000));

const user={
    username:"Shivam",
    price:199
}

function handleobject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleobject(user)

//Direct Object

handleobject({
    username:"Hp",
    price:399
})

//array

const myNewArray=[200,400,100,600]

function returnSecondValue(getarray) {
   return getarray[1] 
}

console.log(returnSecondValue(myNewArray));

  