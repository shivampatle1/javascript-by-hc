const name="shivam"
const repocount=50

// (old code)console.log(name+repocount+"value");

console.log(`hello my name is ${name} and my repocount is ${repocount}`);


const gameName= new String('shivam-sp')

//console.log(gameName[0]); (to access letter of 0 potision)

//console.log(gameName.__proto__);

//console.log(gameName.length); (find length)
//console.log(gameName.toUpperCase()); (for toUpperCase)

console.log(gameName.charAt(2));
console.log(gameName.indexOf('v'));

const newString=gameName.substring(0,4)
console.log(newString); 

const anotherString=gameName.slice(-8,4)
console.log(anotherString); //same as substring but work in reverse 

const newStringOne="      Shivam      "
console.log(newStringOne);
console.log(newString.trim());//remove all empty spece


const url = "http://shivampatle%20com"


console.log(url);
console.log(url.replace('%20' , '-'))

console.log(url.includes('mohan'));
console.log(url.includes('shivam'));// checking hai ya nhi