// for

for (let i = 0; i <= 100; i++) {
  const element = i;
  //console.log(element);
}

for (let i = 0; i <= 10; i++) {
  const element = i;
  //console.log(`OUTER LOOP VALUE :${i}`);

  for (let j = 0; j <= 5; j++) {
    const element = j;
    //console.log(`inner loop value :${j} and outer loop value :${i}`);
  }
}

//PRINT TABLE

for (let i = 0; i <= 5; i++) {
  const element = i;
  //console.log(`outer value ${i}`);

  for (let j = 0; j <= 10; j++) {
    const element = j;
    //console.log(i +`*` +j+ `=` + i*j);
  }
}

//Array Loop

let array = ["Flash", "Batman", "Superman"];

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  //console.log(element);
}

//break and continue

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`5 Is Detected`);
    break
  }
  const element = i;
  //console.log(`Value Of I Is ${element}`);
}
for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`5 Is Detected`);
    continue
  }
  const element = i;
  console.log(`Value Of I Is ${element}`);
}
