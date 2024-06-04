 //function means appny jo code likha 10,20,5 line ka usy 1 pkg mn bnd krdia, wo pkg jitni br jhn chahy uski copies ly ja skty
   // agr mn kahn ye 10 dafa karo to appko dikkat hogi to . () paranthesis, {} fun ka scope yni fun ki def, function ka keyword phir name phir syntax
//  console.log("h");
//  console.log("i");
//  console.log("t");
//  console.log("e");
//  console.log("s");
//  console.log("h");

//  function sayMyName(){
//     console.log("h");
//     console.log("i");
//     console.log("t");
//     console.log("e");
//     console.log("s");
//     console.log("h");

//  }

// //  sayMyName()    //saymyname reference or paranthesis, () te hogaya uska execution
// //  sayMyName  //es trhn nae eska mtlb sirf reference h k ye fun wahn rehta h

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);

// }
// addTwoNumbers()  // hamain nae pata uper kya value hain to run kia to Nan aya q k hmny argument to dia h nae
// addTwoNumbers(4 , 5)  // prob kahn aati jb app esy num nae dyty agar kisi n cots mn 4 dydia hpta (3, "4") or (3, null), jb app fun ki def lyty to ussy pehly() esy parameters or jab app usy call karwaty to usy () argument. ye thori si nomanclature hai naming convention h, 

// const result =  addTwoNumbers(3, 5) 
// js mn es sabhi ko mn 1 variable mn bhi store karsakta hn, result aya 8 to kya mein esy store karsakta, ab es result mn value kya hai  to undefined

// console.log("result:" , result); // yae interesting concept h k fun s appny kya wapis bheja, kahi log smjhty uper jo console log mein dikh raha to woi value wapis ki gae hai, console print karny ka mtlb ye nae k wo function wo value return bhi kar raha, return appny ap mn 1 concept h console sirf console print karna h.


// function addTwoNumbers(number1, number2){
//     let result = number1 + number2  //scope nam ki bhi koi cheez hoti ye result declare kia addtwonum mein or dosra result es function k bhr declr kia, any waly video mn discuss
//     return result
//     console.log("hitesh");  // ye kabhi execute nae hoga by default appny jo return kardia usky bad kuch execute nae hoga, koi kaam nae karega function, 1 line uper ly jao to print hoga

// }


// const result =  addTwoNumbers(3, 5)
// console.log("result:" , result); // result: 8

//* another method*//

// function addTwoNumbers(number1, number2){
//     return number1 + number2           // now understand how return work and jab bhi app return karaingy app usy kisi variable mn store karsakty sirf console log s nae karskty.
// }
// const result = addTwoNumbers(2, 3)
// console.log("result:", result);


// other method

// function loginUserMessage(username){
//   return `${username} just logged in`

// }
// loginUserMessage('hitesh') // kuch bhi run nae hua fun execute hua hai lakin us fun n value return kardi h, lakin appny bola to nae k print kardo ya kisi value mn store karo, yae bt meiny appko smjhae thi to esy log kardety
// console.log(loginUserMessage('hitesh'));
// console.log(loginUserMessage(''));  //just logged in
// console.log(loginUserMessage());  // undefined


// function loginUserMessage(username){
//   if(username === undefined){
//     console.log("please enter a username");
//     return                            //taky neechy wali line execute na ho

//   }                                 //if else kart yahn if()esmein value check karty or ,{}esmein code execute karty
//   return `${username} just logged in`

// }

// console.log(loginUserMessage());

// check

// function loginUserMessage(username){
//   if(username === ('hitesh')){
//     console.log("please enter a username");
                    

//   }                                
//   return `${username} just logged in`

// }

// console.log(loginUserMessage('hitesh'));
//! ye true ko false mn or false ko true mn convert karta h, js mn if else k doran hm dykhaingy kuch value hoti unhn maan lyty k false value h jaisy empty string ko, esi liye undefined ko maan lia jata kfalse value h
// if(!username){} //run karaingy to undefined h hoga


// function loginUserMessage(username){
//   if(!username){
//     console.log("please enter a username");
                    

//   }                                
//   return `${username} just logged in`

// }

// console.log(loginUserMessage());

// default mein nam dedo to if k block mn jana h nae parega

// function loginUserMessage(username = 'sammy'){
//   if(!username){
//     console.log("please enter a username");
                    

//   }                                
//   return `${username} just logged in`

// }

// console.log(loginUserMessage('hitesh'));  //yahn agr app empty rakhogy to to sammy ahega



// kis trhn k app parameters pass karty or agy jaa kapp kuch shopping carts bnahngy,shoppng cart mn user add kia jata you dont know kitny number of items any waly hn appko nae pata kitny arguments any waly, ... esi ko rest operator or esi ko spread operator kehty bas esky use p depend karta, rest mtlb ye item jo mila h ye bht khuly mn mila h es sbko 1 bundle mn pack karo or mjhy dedo
// function calculateCartPrice (...num1){
//   return num1

// }
// console.log(calculateCartPrice(300, 400, 450, 500)); //fun mn multiple value kaisy pass hoti h , es rest operator s, parameters ko dhiyaan mn rakhain k kya value derahy


// function calculateCartPrice ( value1, value2, ...num1){
//   return num1

// }
// console.log(calculateCartPrice(300, 400, 450, 600, 2000, 500));

// now object

//abhi hm 1 obj banaty hn
const user = {
  userName: 'hitesh', 
  price: 199


}  // ab es obj ko fun mein kaisy pass kia jata or kaisy use kia jata

function handleObject(anyObject){         //anyobj likha taky generic rahy user nae likha
  console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);

}

// handleObject(user)
handleObject({   // app yahn direct obj bhi pass karsakty zaroori nae k ban k h karain
  userName: "sam",
  price: 399
})


// now Arr pass karty
const myNewArr = [100, 200, 300, 400, 500]  //ab fun define kart jo arr ko accept karta or uski 2nd value ko return karta
function returnSecondValue(getArr){
  return getArr[1]

}
// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([100, 200, 300, 400, 500]));  //same obj wala kam yahn hosakta direct

//scope//******************************************************************************************************** */
// scope lengthy topic closure etc sb esi mn aty hn





























