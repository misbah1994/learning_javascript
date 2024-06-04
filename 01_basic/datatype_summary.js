// primitive and non primitive difference categorize
// call by value or call by reference
// how to store data in memory and how to access your data ye hai (difference is)
// Primitive
// 7 types : string, number, boolean, null, undefined, symbol, bigInt
// call by value

// reference (non premitive)
//reference can be allocated in memory directly
// array, objects, functions

// const heroes =  [ "ozair", "khalid", "atif"]

//   let myObject =  {
//     name: "misbah",
//     Age: 22,

// }

// let myFunction = function(){
//     console.log("hello world");
// }
// // function declare manyways forementioned way is function is in store in variable
//  console.log(typeof BigInt);
//  console.log(typeof bigNumber);
//  console.log(typeof null);







// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// 
// console.log("misbah");
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol("123")
// const anotherId = Symbol("123")
// console.log(id === anotherId);

// // const bigNumber = 23454444448654574444438287n
// console.log(typeof myFunction);

/* stack memory (primitive datatype mein use hoti) and heap memory (non primitive or Reference)*/

// stake mem jb bhi use hoti to jo variable hota uski copy appko milti h, agar heap mein define hoti ya koi bhi obj heap mn jata to wahn se appko milta reference. jo bhi change karaingy wo original value mein change hoga

// let myYoutubeName = "misbahrehman.com"
// let anotherName = myYoutubeName
// anotherName = "chai aur code"
// console.log(anotherName);
// console.log(myYoutubeName);

let userOne = {
email: "user@gmail.com",
upi: "user@ybl"

}

let userTwo = userOne
userTwo.email = "misbah@google.com"
console.log(userOne.email);
console.log(userTwo.email);










