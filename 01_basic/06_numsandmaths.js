// const score = 300 // js n detect kia automatically eska type num but app explicitly bhi define karsakty
// console.log(score); // automaticallly define its number

// const balance = new Number(100) //app dedicately define bhi karsakty
// console.log(balance); // especifically cast number when we print. in number there is less than property compare to string when we console
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // precision value in ecommerce website gst etc


// // const anotherBalance = 23.8936
// // //console.log(anotherBalance.toPrecision(3));
// const anotherBalance2 = 123.8966
// console.log(anotherBalance2.toPrecision(3));
// const anotherBalance3 = 1123.8977
// console.log(anotherBalance3.toPrecision(3));

// const hundreds = 10000000 //difficult to calculate in js there are methods to representation easy hojati
// console.log(hundreds.toLocaleString()); // by default us standard
// console.log(hundreds.toLocaleString('en-In')); // indian
 


//********************Math library *********************//
//  console.log(Math);
//  console.log(Math.abs(-4));
//  console.log(Math.abs(4));
//  console.log(Math.round(4.3));
//  console.log(Math.ceil(4.2));
//  console.log(Math.floor(4.6));
//  console.log(Math.min(2,3,3,4,6,8,));
//  console.log(Math.random()); // value 0 or 1 k bech mn ahegi always
//  console.log(Math.random()*10); 
//  console.log((Math.random()*10)+1); // 0.01 bhi hosakta to for avoid this case we use +1
//  console.log((Math.random()*10)+1);
 console.log(Math.floor(Math.random()*10)+1); 

 const min = 10
 const max = 20
console.log(Math.floor(Math.random()*(max - min + 1)) + min);

