//switch
//kahi br 1 value h usko appko multiple condition s chk karna h, us cases mn swich case statement ata, agy ja k jb app redox etc prhngy to ye bht kam mn ata

// switch (key) {   //key wo value jo mjhy hr br chk krni h, 1 key hai appky pass or bht sary lock to , jo tala khool jae wo code execute
//     case value:
        
//         break;

//     default:
//         break;  //by default jhn bhi appka key match hogaya usky bad ka sara code execute hojata except default k , tabhi break lagaty app commnt kr k dykhlo
// }
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 3 //obviously si bt h appko 12 month k liye chk karna to if else if else, karskty ho koi problm nae bht time lagega to aisi situation mn hm switch statement chk karty
// switch (month) {
//     case 1:
//         console.log('january');
        
//         break;
//     case 2:
//         console.log('feb');
        
//         break;
//     case 3:
//         console.log('march');
        
//         break;
//     case 4:
//         console.log('april');
        
//         break;
    

//     default:
//         console.log('default case match');
//         break;
// }

// //ORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR

// const month = "march"
// switch (month) {
//     case 'jan':             //case sensitivity k khyl rkhain agr case jan h to jan print
//         console.log('january');
        
//         break;
//     case 'feb':
//         console.log('feb');
        
//         break;
//     case 'march':
//         console.log('march');
        
//         break;
//     case 'april':
//         console.log('april');
        
//         break;
    

//     default:
//         console.log('default case match');
//         break;
// }

//my practice//////////////

// const month = "march"
// switch (month) {
//     case 1:
//         console.log('jan');
        
//         break;
//         case 2:
//         console.log('feb');
    
//         break;
//         case 3:
//         console.log('march');
    
//         break;
//         case 4:
//         console.log('april');
    

//     default:
//         console.log('default case match');
//         break;
// }
// kuch value ko assume karlyty ye true hoga ya false hoga , truthy or falsy value, suppose appny daabase s quiry ki
// const userEmail = 'hitesh@gmail.com' //agr yhn empty string hota to maan lia gaya k false h to, dont hve user email.
// //empty array h to wo truthy value h   
// if(userEmail){         //hmny koi comparison nae kia 1 string ko maan lia gaya k wo truthy value h
//     console.log('got user email');

// } else{
//     console.log('dont have user email');
// }

//false, 0, -0, bigInt 0n, "" , null, undefined, NaN
//truthy values: "0", "false", " ", [], {}, function(){} esy khtyempty fun esmein koi parameter nh koi execution code nae horaha,



// const userEmail = []  //arr ko chk krny ka tareka alg h
// if(userEmail.length === 0){
//     console.log('array is empty');

// }

//oRRRRRRRRRRRRRRRRRRRRRRRRRRRRrr
//obj mn hmny para tha k Object.key(emptyObj) essy key ka 1 arr bn k aajata ab .lenghth property call kr k 0 s match krlnga.
// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){  
// console.log('obj is empty');
// }

//now you know how to detect obj k empty h k nae or same arrray ko bhi detect krskty


//ye hmny console mn ja k kia bas app yaad rkhain
//  false == 0    true
//  false == ''   true
//  0 == ''       true

//&& or || operators
//&& jitni bhi condition h sari true aani chahye, || 1 bhi true h to mn apna km karng



//Nullish coalescing Operator (??): null undefine, esmn sara null or undefined keyword p h dykhna appko
// let val1;
// val1 = 5 ?? 10 


// console.log(val1); //ab app kahaingy ye operator lgany ka faida h kya hua jab esmein value h 1st value ,5 jaani thi jb app database s call karaingy firebase ka use krngy, to appko directly response nh milta h, appko 2 values milti h to chnces h k appky pass null response aajah, ya hoskta h response ahy h na undefined ajh, to us case mn appka pura ka pura code stricture parshn hoskt, to usky liy specially ye bnaya gaya k values ko appko treat krna k agr null ho to null assign kardo, undefined h to, wrna koi value arae to wo assign kard

// let val1;
// val1 = null ?? 10  //NCO ka kam h k agar null value ae to uska safety chk krdy, q k null k bases p progrm run na kary ya agy ja k prob aajah, new operator h ye to agr null h to null assign kardo wrna, abhi to 10 dikh rha lakin actualy mn 10 nae hoga to yhn hm complex fun laga dyty, wo fun ko dtabase call kr rha whn s value arae, agr value aarae to thk wrna null assign krdo, to us hisb s handle krln agy ki situation ko


// console.log(val1); //null



// let val1;
// val1 = undefined ?? 15

// console.log(val1);  //15


// let val1;
// val1 = null ?? 10 ?? 20 //suppose appny fun likhy pehla appko null 2sra 10 or 3sra 20 return karta to us case mn kya hoga to jo bhi 1st val usy mili woi assign hogi , basiclly hamarafallback h k agr essors ahy to how to handle or if we assign value place of error so how


//TERNIARY OPERATOR; ye hamara if else ka syntax

// condition ? true: false //aksr log es ? ko dykh k smjhty ye bhi aisy h act karta to nae his design goal and pattern all is different

// const iceTeaPrice = 100
// iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");

  






























