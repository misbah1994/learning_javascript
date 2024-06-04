// esy logic flow bhi khty or control flow bhi, peechy jitny bhi kiye wo pura code run hota lakin pura code run nae hona chahye conditional base p pura code run hona chahye, app login ho to koi or code run hona chahye, log out ho to koi or code run hona chahyee esi ko bolty control flow ya logic flow //if to if (condition){}, condtion true honi chahye to h internal code h es scope mn wo execute hoga , agr app false likh dyty to condition mn nae jaeng, true evaluate kaisy hoga ab true to nae likhy gy to 2==2 k obvious appko comparison karny paregy
//
// const isUserLogin = true
// if(isUserLogin){

// }


//comparison operators

// suppose app iterate kar rahy loop laga rkha h, app condition chk krrhy 2<=2, 2 check 1 sth kardeta ye, ya to value choti honi chahye ya to  barabr honi chahye = ye single equal operator assignment ka hai ye bt zehn mn , uper hmny true value ko assign kia es isuserlogin mn 3!=2, 3 barabr nae h 2 k. neg statemnt app kahi br dykhaingy anwere bas true ana chahye neg ly ya positive
//<,>, <=, =>, ==, != not equal, === ye appki type bhi batata, !== antipattern ye neg sign check karleta


// if(2=="2"){                     // ye to number or string data type h to es strict chkng k liye ===
//     console.log('executed');
// }
//ORRRRRRRRRRRRRR

// if(2===2){
//     console.log('executed');
// }


// if(2==="2"){
//     console.log('executed'); //qk hmny outside mn kuch likha h nae h to kuch or run nae hua
// }

// const temperature = 41
// if(temperature < 50){
//     console.log('less than 50');
// }
// console.log('greater than 50'); //ye to execute hoga h

//ORRRRRRRRRRRRRRRR

// const temperature = 41
// if(temperature === 41){
//     console.log('less than 50');  //koi 1 hoga
// } else{
// console.log('greater than 50');}  //koi 1 hoga
// console.log('executed');  //ye to hoga h hog

// //ORRRRRRRRRRRRRRRRRRRRRRRRR

// const temperature = 41
// if(temperature === 40){
//     console.log('less than 50');  // nae hua ye
// } else{
// console.log('greater than 50');}  //ye hua
// console.log('executed');  //ye to hoga h hoga

/////////////////////////////////////////


// const score = 200
// if(score > 100){
//     const power = 'fly'
//     console.log(`user power: ${power}`);
    
// }

// console.log(`user power: ${power}`);
  //yhn ati h prob , jtni br ye {} lgty hn enka 1 alg scope count hota h, jo variable {} mn declare hogahy uska scope bs utna h hai, wo bhr appko executin mn nae milty variable, agr mn var andr likh to uska scope h cmpltly glbl

// const score = 200
// if(score > 100){
//     var power = 'fly'  //var ka scope completely globl h, dono execute huey dont use var
//     console.log(`user power: ${power}`);
    
// }
// console.log(`user power: ${power}`);


//Short hand notation, {} implicit scope k mn lia hai meiny
// const score = 1000
// if(score > 100) console.log('test');  //ye 1 h line mn execute hoga notice krn automatic semicolon aaya, app yhn multiple lines nh likh skty , although log coma , laga k likhty bhi h

// const score = 1000
// if(score > 100) console.log('test'),  //ye bht h unreadible code h although execute hojaega
// console.log('test1');
//



// nesting, many times we could do mutlipl conditions
// const balance = 1000
// if(balance < 500){
//   console.log('less than 500');
// }
// else if (balance < 700) {
//   console.log('less than 700');

// }
// else if (balance < 900) {
//   console.log('less than 900');
// }
// else  {
//   console.log('less than 1200');

// }
// const UserLoggedIn = true
// const debitCard = true
// if( UserLoggedIn && debitCard){
//   console.log('allow to buy courses');
// }

///oRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR

// const UserLoggedIn = true
// const debitCard = true
// if( UserLoggedIn && debitCard && 2==3){    //ampersand sary thk hony chahye
//   console.log('allow to buy courses');



const UserLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if( UserLoggedIn && debitCard && 2==3){    //ampersand sary thk hony chahye
  console.log('allow to buy courses');
}

  if(LoggedInFromGoogle || LoggedInFromEmail){
    console.log('user logged in');
  }
  // agy ja k app conditionl randerring bhi krngy, to kya hoga app simple bology k kya user loggedin h, or ussky pass token button bhi h , to usy login button mt dikhao, us login button ki jagah uska text chng kardo or log out button dikhao

  //switch






































































