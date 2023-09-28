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

