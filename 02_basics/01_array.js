// array

const myArr =[0,1,2,3,4,5]
const myHeros =["shaktiman","naagraj"]
const myArr2=(1,2,3,4,5)

//console.log(myArr[1]);

//Array Methods

//myArr.push(6) (add number in end)
//myArr.pop() (remove number from end)
//console.log(myArr);

//myArr.unshift(90) //(add number in first)
//myArr.shift() //(remove number from first)

//console.log(myArr.includes(9));//(we check number is present or not and its give answer in booleaan (true/false))
//console.log(myArr.indexOf(4));//(if not present number then it provide -1 , and if present in number then its shows number of which index present)


//const newArr= myArr.join() //it change into string

//console.log(myArr);
//console.log( newArr);
//console.log(typeof newArr);


//++++++++++++++++++++++++++++slice,splice++++++++++++++++++++++++++//

console.log("A" ,myArr);
const myn1=myArr.slice(1,3)


console.log(myn1);
console.log("B" , myArr);

const myn2=myArr.splice(1,3)
console.log("C", myArr);

console.log(myn2);

