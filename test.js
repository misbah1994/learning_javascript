console.log("Misbah")
const randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver= document.querySelector('.resultParas');
const p = document.createElement("p")
let prevGuess = [];
let numGuess = 1;

let playGame = true;
if(playGame){
  submit.addEventListener('click', function(e){
  e.preventDefault()
  const guess = parseInt(userInput.value);
  console.log(guess)
  //esy pass krdia validate guess ko, log kr k dykh lo number chaho to 
  validateGuess(guess);// validtion mthd bht likhny wly hn app jb bckend likho gy kisi bhi application ka usernameaya email ae , validtion kia jata k email mn @ hai na , database mn already to nh h 

  });
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
      displayMessage(`Game Over, Random number was ${randomNumber}`)  //global scope mn th to rndmnmbr ko access krlia 
       endGame()
    } else{
      displayGuess(guess) //ye number appny guess kia th or ye guess list mn chala gaya
      checkGuess(guess) // sahi tha ya nh
    }
  }
//
}
 function checkGuess(guess){
   if(guess===randomNumber){
     displayMessage('you guested it right')
     endGame()
   } else if (guess<randomNumber){
     displayMessage('number is Tooo low')
   } else if (guess>randomNumber){
     displayMessage('number is Tooo high')

   }
 }
 function displayGuess(guess){ // userinput ki value update krdaingy esmein 1 br appny vlu submit krdi upr 2 dafa ya ziada displayguess run horha to value to khli krni n, es mthd ko cleanup  mthd bhi khskt
  userInput.value = '';
  guessSlot.innerHTML += `${guess}`;// jo bhi guess value h yhn update nh push krta jaraha 
  //user n value dedi uska cleanuo hogaya, show bhi hua innerhtml mn  abb vlu barhni bhi to chahye
  numGuess++;
  remaining.innerHTML = `${11-numGuess}`; 
 } 

function displayMessage(message){
lowOrHigh.innerHTML =  `<h2>${message}</h2>`;//sab log appna msg achy s baa k deh rhy hain
}

function endGame(){
  3.
3
}
function newGame(){
  
}
//sbsy phly to app dykho app gme khlny k liye availabl ho k nh to if sy, submt p evntlistner
