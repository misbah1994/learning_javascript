// es6 aya 2015 mn, or bht sary features ly k aaya unmein s 1 arrow function h , 1 keyword ki bhi bt karlety THIS, current context k bary mn batata, arrow functin smjhny k liye this smjhna parega or this smjhny k liye waps s obj mein jana parega' sabny rat lia k arrowfun mn this nae hota to q nae hota or agr hota h to kya usko refer krta h
 

// const user = {
//     username: "hitesh",
//     price: 199,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to the website`);
         
//     }
// }
// user.welcomeMessage()
// user.username = "sammy"
// user.welcomeMessage()

// console.log(this);

// line number 12 mn current context sme th, 13 mn context chane kardia, context means value jo variables h wo kya kya hold kar rahy

// const user = {
//     username: "hitesh",
//     price: 199,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to the website`);
//         console.log(this);   //this current context ki bt karta 
//     }
// }
// user.welcomeMessage()
// user.username = "sammy"
// user.welcomeMessage()

//OR

// const user = {
//     username: "hitesh",
//     price: 199,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to the website`);
//         console.log(this);
     
//     }
// }

// console.log(this);  // q k hm node environment mn h to abhi ye this refer kar raha 1 empty obj ko, q k global mn koi cotxt h nae to empty. lakn jb browsermn karaingy to mjhy window dikhae dy raha, phly k tme p js ko execute krny ka 1 h tareeka th browse, jo engne th jo js ko execute karta th wo simply 1 h jaga paya jata th browsr k andr ab hmny usko nikala or alg alg naam dia deno, node. ab hamary pss engine standalone h, to browsr mn jo run karta to whn sabsy ziada globl object window obj h, tbhi ti appp wndow k sth event capture karpaty


// function chai(){
//     console.log(this);   //abhi hmny run kia to bht sari value ae h , jab app kisi fun mn print karty globl enviroment mn to appko globl value bhi ati, kuch microtask or structure clown bht sari value esmein kuch to rakha hua h or app whn cheezon ko access karskty
// }
// chai()
// //OR

// function chai(){
//     let username = "hitesh"
//     console.log(this);  //woi wapis s globl values h or same sb, abk kya mn esko this.username print karskta abhi mein 1 fun mein ho
// }
// chai()

//OR


// function chai(){
//     let username = "hitesh"
//         console.log(this.username); }
        
//         //agr mein ab this .username krn to run ki undefined to appny ye dyka k ye jo hamara contxt hai ye object mn h kam kar raha aisy fun mein aa k nae karraha, agy DOM mn manipulation karaingy to ye sb hamain kam mn ahega

// chai()

//OR

// const chai = function(){
//     let username = "hitesh"
//             console.log(this.username); // undefined to esy bhi nae pata app kya bt kar rhy

// }

// chai()

//oRRRRRRRRRRRRRRRRRRRRRRRRRRRR ye tareeka es 6 mn mila tha k fun keyword hatalain app or paranthesis  k bad app arrow => lagadsin

// const chai = () => {
//     let username = "hitesh"
//             console.log(this.username);  // undefined


// }

// chai()


// ORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR


// const chai = () => {
//     let username = "hitesh"
//             console.log(this);  // {}


// }

// chai()

// to jo log ankh bnd kar k kehty hn k arrow function or normal fun mn ye difference h k arrow fun mn app this use nae karskty or normal fun mn karskty hn wo ye dfrnce janna h nae chahty


// const addTwo =  (num1,num2) => {
//     return num1 + num2


// }
// console.log(addTwo(2, 4));

//oRRRRRRRRRRRR implicit return mn appko ye paranthesis use nae karny perty or return wali cheez ko same line mn ly jhn, implicit mtlb mn maan lyta  hn to appko ye return keyword likhny ki bhi zroort nae ab run karaingy to run karega.


// const addTwo =  (num1,num2) =>  num1 + num2  //1 tareeka h esy () mn wrap kardo



// console.log(addTwo(2, 4));

// curly braces mn wrap kia to return keyword likhna parega or agr en () parenthesis mn kia to return kywod nae likhna pryga ye technique react mn bht use ahegi us time nae bataonga
// ye technique react mn bht use ahegi, suppose karain abhi to app num1 or num2 return kr rhy thy agar app koi obj return karty to {} ye lagana parhta
// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3, 4));

//OOOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR

// const addTwo = (num1, num2) => {username: 'hitesh'}
// console.log(addTwo(3, 4));  //undefined q k es trhn app obj ko return nae karskty obj ko return karny k liye appko usy () mn wrap karna h parega

// const addTwo = (num1) => ({username: "hitesh"}) //obj ko return karny kliye () mn wrap karna parega
// console.log(addTwo(1));


//explicit return kya hota jb app return keyword use karty explicitely lagana prhta

//lecture 24 IIFE Imediately Invoked Function Expression, concept ha . to jaisy h appny fun likha usy forn h execute karwana h. kahi br hm file likhty jismein sirf database connection h, hm chahty jaisy h hamari application start ho waisy h database ka connection strt hojae, hm nae chahty k fun mn global variable kuch prob kary , wo to available h bachy to ja k baro s mang skty, to jo bhi app fun mn declare kr rhy wo globl s kahi br pollute hojaty. 2 reason hoty k globl s pollution nae chahye bilkul bhi to hm hmara alg scope bana lyty q k fun mn to scope bn h jata h OR mein chahta imediately execute hojae

// function chai (){
//     console.log("DB CONNECTED");
// }
// chai()  //gap hatadia, lkn uska kya karain jo hamara globl scope h whn s cheezain pollute hoti kahi br or hmn lgta k ye pollution atleast es fun mn to nh hona chahye ,

// now
//ye iife invoked to hogaya lkn esy pata nae k rokna kahn h to app ; ye lagao, dobara wrna run nae hoga


// (function chai(){   //ye 1 named IIFE h
//     console.log("DB CONNECTED"); //; ye lagana hoga end karny k liye semicolon, explicitely lagaya 
// })()                                      // es pury fun p hmny () parnthesis lagahy, jaisy uper parha jb obj declare jb () lagado to automaticlly 1 block bn jata or usmein bhi kam kia jskta hmny jb uper obj declare kia tha arrow fun mn ({username: "hitesh"})
// interview mn globl scope k pollution s prob hoti h kahi br to us globl scope k value ya varible ko hatany k liye hmny iife ka use kia

//arrow fun mm


// (() =>{
//     console.log("DB CONNECTED TWO");
// })()

//now suppose ye jo log hai ye 1 vaiable bhi expct karta ye unnamed iife h' 2 IIFE jb sath mn pass krty to semicolon lagaty

((name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
})("MISBAH")  //esy as a fun h dykhna ye esy execute kr rha























































































