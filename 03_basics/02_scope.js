//var c=300
//let a=300
if (true) {
    let a=10
    const b=20
   // var c=30
   //console.log("inner:", a);
}

//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username ="Shivam"

    function two() {
        const website = "youtube"
        //console.log(username);
        
    }

    //console.log(website);

    two()
}

one()  


//bda chote se le skta hai par chote se bda nhi le skta hai

if (true) {
    const username="Shivam"
    if (username==="Shivam") {
        const website="  - youtube"
        //console.log(username+website);
    }

    //console.log(website);
    
}

//console.log(username);

//*********************** intresting************************** */


console.log(addone(5));
function addone(num){
  return num+1
}



addtwo(5)
const addtwo = function(num){
    return num +2
}

//addtwo(5)
