const randomNum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver= document.querySelector('.resultParas');
const p = document.createElement("p")
let prevGuess = []
let numGuess = 1

let playGame = true
if(playGame){
  submit.addEventListener('click', function(e){
  e.preventDefault()
  const guess = parseInt(userInput.value)//esy pass krdia validate guess ko, log kr k dykh lo number chaho to 
  validateGuess(guess)// validtion mthd bht likhny wly hn app jb bckend likho gy kisi bhi application ka usernameaya email ae , validtion kia jata k email mn @ hai na , database mn already to nh h 

  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert("please enter a valid number")
  } else if(guess<1){
    alert("please enter a number greater than 1")
  } else if(guess>100){
    alert("please enter a number less than 100")
  } else{
    prevGuess.push(guess)
    if(numGuess===11){ //numguess global mn tha 
      displayGuess(guess)
      displayMessage(`Game Over, Random number was ${randomNum}`)  //global scope mn th to rndmnmbr ko access krlia 
       endGame()
    } else{
      displayGuess(guess) //ye number appny guess kia th or ye guess list mn chala gaya
      checkGuess(guess) // sahi tha ya nh
    }
  }
//
}
 function checkGuess(guess){
   if(guess===randomNum){
     displayMessage('you guested it right')
     endGame()
   } else if (guess<randomNum){
     displayMessage('number is Tooo low')
   } else if (guess>randomNum){
     displayMessage('number is Tooo high')

   }
 }
 function displayGuess(guess){ // userinput ki value update krdaingy esmein 1 br appny vlu submit krdi upr 2 dafa ya ziada displayguess run horha to value to khli krni n, es mthd ko cleanup  mthd bhi khskt
  userInput.value = ''
  guessSlot.innerHTML +=`${guess}`// jo bhi guess value h yhn update nh push krta jaraha 
  //user n value dedi uska cleanuo hogaya, show bhi hua innerhtml mn  abb vlu barhni bhi to chahye
  numGuess++;
  remaining.innerHTML = `${11-numGuess}` 
 } 

function displayMessage(message){
lowOrHigh.innerHTML =  `<h2>${message}</h2>`//sab log appna msg achy s baa k deh rhy hain
}

function endGame(){

}
function newGame(){
  
}
//sbsy phly to app dykho app gme khlny k liye availabl ho k nh to if sy, submt p evntlistner
 
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
    // console.log("hitesh");  // ye kabhi execute nae hoga by default appny jo return kardia usky bad kuch execute nae hoga, koi kaam nae karega function, 1 line uper ly jao to print hoga

// }


// const result =  addTwoNumbers(3, 5);
// console.log("result:" , result); // result: 8

////////my practice***********************************
// function myPractice(num1, num2, num3){
//   let result = num1 + num2 + num3
//   return result

// }
// const result = myPractice(1, 2, 3)
// console.log("result:" , result);

////////////ORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRrrr

// function myPractice(num1, num2, num3){
//   return num1 + num2 + num3


// }
// const result = myPractice(1, 2, 3)
// console.log("result:" , result);

//orrr

// function loginUserMessage1(userName){
//   return `${userName} May i help you`

// }
// const result = loginUserMessage1("Misbah")
// console.log("result:",result);
// // console.log(result);
// //or
// console.log(loginUserMessage1("Misbah"));

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
// if(username === undefined){
//     console.log("please enter a username");
//     return                            //taky neechy wali line execute na ho

//   }                                 //if else kart yahn if()esmein value check karty or ,{}esmein code execute karty
//   return `${username} just logged in`

// }

// console.log(loginUserMessage());

// function loginUserMessage1(username){
// if(username === undefined){
//   console.log('please enter your name');
// return

// }
// return `${username} just logged in`

// }
// console.log(loginUserMessage1());

// check

// function loginUserMessage(username){
//   if(username === ('hitesh')){
//     console.log("please enter a username");
                    

//   }                                
//   return `${username} just logged in`

// }
// console.log(loginUserMessage());
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

// // abhi hm 1 obj banaty hn
// const user = {
//   userName: 'hitesh', 
//   price: 199


// }  // ab es obj ko fun mein kaisy pass kia jata or kaisy use kia jata

// function handleObject(anyObject){         //anyobj likha taky generic rahy user nae likha
  // console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);}
  // handleObject(user)


///my practice//////////////
// const user = {
//   userName: 'hitesh', 
//   price: 199


// }  // ab es obj ko fun mein kaisy pass kia jata or kaisy use kia jata

// function handleObject(user){         //anyobj likha taky generic rahy user nae likha
//   console.log(`username is ${user.userName} and price is ${user.price}`);

// }

// handleObject(user)
// handleObject({   // app yahn direct obj bhi pass karsakty zaroori nae k ban k h karain
//   userName: "sam",
//   price: 399
// })

////////////my practice///////////////////////////////////
// const putObject = function(myObject){
//   console.log(`userName is ${myObject.userName} and her age is ${myObject.age} and year she born ${myObject.BornYear}`);

// }
// putObject({
//   userName: 'MinsaAmin',
//   age: 3,
//   BornYear: "2023"
// })

// const putArray = function(myArr){
//   return myArr[4]

// }
// console.log(putArray([300,400,500,700,450]));




// now Arr pass karty
// const myNewArr = [100, 200, 300, 400, 500]  //ab fun define kart jo arr ko accept karta or uski 2nd value ko return karta
// function returnSecondValue(getArr){
//   return getArr[1]

// }
// // console.log(returnSecondValue(myNewArr));
// console.log(returnSecondValue([100, 200, 300, 400, 500]));  //same obj wala kam yahn hosakta direct

//scope//******************************************************************************************************** */
// scope lengthy topic closure etc sb esi mn aty hn





























