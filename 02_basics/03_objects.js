//singleton

//object litrerals

const mySym = Symbol("key1")

const JsUser ={
    name:"Shivam",
    "full name ":"Shivam patle",
    [mySym]:"mykey1",
    age:18,
    location: "balaghat",
    email:"shivampatle@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday" , "Saturday"],
}

//console.log(JsUser.email)//old way
//console.log(JsUser["email"])
//console.log(JsUser["full name"])
//console.log(JsUser[mySym])
//console.log(typeof JsUser[mySym])


//*******************change value********************************** */
JsUser.email="shivampatle@microsoft.com"
//Object.freeze(JsUser) // now we can change noting
JsUser.email=("shivampatle@amazon.com")
//console.log(JsUser["email"]);

//console.log(JsUser)

//function

JsUser.greetings=function(){
    console.log("Hello Jsuser");
}

JsUser.greetingsTwo=function(){
    console.log(`Hello User ${this.name}`);
}
console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());


