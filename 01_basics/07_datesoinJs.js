 //dates

 let myDate = new Date()
 console.log(myDate.toLocaleString(`defualt`, {
   weekday:"long"
}));
 //console.log(myDate.toDateString());
 //console.log(myDate.toISOString());
 //console.log(myDate.toLocaleDateString());
 //console.log(myDate.toJSON());
 //console.log(myDate.toLocaleString());

 let mycreateDate = new Date(2023,0,23)
 //console.log(mycreateDate.toDateString())
 //let mycreateDate = new Date(2023, 0, 23, 5, 3)
 //console.log(mycreateDate.toLocaleString());
 //let mycreateDate=new Date("01-14-2023")
 //console.log(mycreateDate.toLocaleString());

 let myTimeStamp = Date.now()
 //console.log(myTimeStamp);

 console.log(mycreateDate.getTime());

 console.log(Math.floor(Date.now()/1000));

 let newDate=new Date()
 console.log(newDate);
 console.log(newDate.getDate());
 console.log(newDate.getDay());
 console.log(newDate.getHours());
 console.log(newDate.getMonth());

 //`${newDate.getDay()} and the time`

 newDate.toLocaleString(`defualt`, {
    weekday:"long"
 })
 