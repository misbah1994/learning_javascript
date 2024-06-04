// // long standing pain point hai js ka, dates.
// let myDate = new Date() // ye banadia appny date ka 1 obj date ka 1 instance
// console.log(myDate); // hard to get 
// console.log(myDate.toString()); // lil better
// console.log(myDate.toDateString()); 
// console.log(myDate.toISOString()); 
// console.log(myDate.toJSON()); 
// console.log(myDate.toLocaleDateString()); 
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString()); 

// let myCreatedDate = new Date(2024, 0, 23) // in js months start with 0 jb app single mein likhty array h to 0 s start hota

// let myCreatedDate = new Date(2024, 0, 23, 3, 5)
// let myCreatedDate = new Date("2024-01-12")
// let myCreatedDate = new Date("01-12-2024")

// console.log(myCreatedDate.toLocaleString());
// let myTimeStamp = Date.now() // for exact time when you design quizez and poles
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // now you can compare easily myTimeStamp and myCreatedDate. always compare in milisecond
// console.log(Math.floor(Date.now()/1000)); // we converted in seconds by divided 1000
 

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()); 
// start with zero //if you want to extract other information. suppose mjhy to usmein sy month janna pura string mn convert h nae karna
// `${newDate.getMonth()}` and the time is

console.log(newDate.toLocaleString('default', {
    weekday: "long",
}))
// tis method is very interesting because in this method you define an object, you define so many parameters here().pehly ap string mein likhty k konsa internatinalization chahye then you can define pura ka pura in this obj{}. ctrl space karty h properties show hojati mtlb ap esy or customized karsakty


