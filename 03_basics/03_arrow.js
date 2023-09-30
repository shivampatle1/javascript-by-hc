const user={
    username:"Shivam",
    price:999,

    welcomeMessage: function () {
      console.log(`${this.username} welcome to website`);  
      console.log(this);
    }
}

//.welcomeMessage()
//user.username="sam"
//user.welcomeMessage()

//console.log(this);

//********************************************************************* */

//function chai(){
  //let username="shivam"
  //console.log(this.username);//function ke andar this use nhi kr skte object ke andar kr skte hai
//}

//chai()

//const chai = function () {
//  let username="shivam"
//  console.log(this.username);
//}

//chai()



const chai=() =>{
  let username="shivam"
  //console.log(this);
}

chai()

//kisi type ke function me this use nhi kr skte 


//explicit return
//const addtwo=(num1,num2) =>{
//return num1+num2
//}

//console.log(addtwo(3,4));

//implicit return

//const addtwo =(num1 , num2)=> (num1+num2)

const addtwo = (num1 , num2) => ({username:"shivam"}) //object le liye perentesis lgate hai


console.log(addtwo(5,5));


//const myArray =[2,4,3,7,,8]
//myArray.forEach()