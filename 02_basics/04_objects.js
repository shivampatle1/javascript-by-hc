//const tinderUser = new Object()

const tinderuser={}

tinderuser.id="123abc"
tinderuser.name="ram"
tinderuser.isloggedIn=false

console.log(tinderuser);

const regularUser={
    email: "someone@gmail.com",
    fullname: {
        userfullname:{
        firstname:"Shivam",
        lastname:"Patle"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);


//**********************adding object+++++++++++++++++++++++++ */

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

const obj4={...obj1,...obj2,...obj3}
//console.log(obj4);
const users =[

    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:1,
        email:"s@gmail.com"
    },
]


users[1].email

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isloggedIn)'));