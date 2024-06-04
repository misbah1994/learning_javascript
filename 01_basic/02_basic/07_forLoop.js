//for loop with break and continue in javascript.
//loops second name iteration, iterators phython mn appny app mn 1 concept h. in programming there's many ways to do 1 thing to loop k bhi 4,5 ways h, for loop agr forloop sekh lia to phython ho ya js kahani same h ha, ab for loop ka syntax kaisy seekhi to sbsy smple 1 se 10 tk num print karwaiye adhi khni wahnclear

//for loop alg alg jgh bara jump kar kabhi khn eska control flow kabi khn, jaisy hmny fun mn dykha th k call kr rhy to flow whn chala gaya fun ki def p, whn fun execute hua phr wapis s yhn aya

// //sbsy phly appko nzr ani chahyee ye curly braces , 1 blockscope hamary pass aya to jo bhi esky andr declare hog or esky through dclr hog, wo agy j k appky km mn nae ahegi

// //yhn 1 .index
// declare horaha h let .index
//  = 0 , abhi app es .index
//  ko {} k bhr print karwhn to uska access nh hog, how to read it first variable declared here .index
//  and you put it value 0, esky bad ye portion jisy khtycondition chk .index
//  < array.length, .index
//  ki length km honi chahye array . lentgh s we know ye 1 property h, phir .index
//  ko ye brhaye jarha h .index
//  ++ to jaisy h us iteration ka kam hojaega, ye jo .index
// ++ h espy directly loop nae ata h, jaisy h conditon chk hojati to loop andr ghuss jata h, or jb ye pura execute hojata h phr bhr jump krk, .index
// ki vale 1 br brhadyt h wrna to 1 h jaga rh jaogy hr br woi km kart rh jaogy, jaisy appny series strt ki sries mn phay nh rehna khtm krn

// //es .index
// ko tb tk es loop mn ly k jao, jb tk es loop mn jaiye jb tk eski value 10 s less h, fun kliye hmny es elemnt ko print bhi karwalia, executon control yahn .index
//  index++ p chla jta h, ab .index
// ko brhado q k wapis s aa k condition bhi to chk krni q k declaration to 1 h br hota h, // wpis s smjhty,jhty jaisy h appny for keyword lagaya appka .index
//  initialize hota h, usky bd chk hoti condtion agr cond true h to executi hog, to jo bhi appko yhn log krwana print kerwna ya database ko cl karwana, jaisy 1 br call hogaya to line 17 s just phnly ye ja k .index
//  ki value ko jissy app iterate kr rhy brha dyta h, wapis s app aajaty es .index
//  p < 10 wapis chking wpis s andr wps s incremnt wapis s chkng, agr chkng fail to seedha bhr aajhngy line 18 p

// // ye 9 tk print hua q k 10,10 s chota h nae blky brbr h or agr appko 10 bhi krwana to <= lgado
// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
    
// // }

// for (let i = 0; i < 10; i++) {
//     const element = i; //eska access bhr nh h q k hmny esy scop mn h dclr kia. bhr nh hona chahye bht ziada spiling hojti prob hojat
//     if(element == 5){
//         console.log("5 is the best number");  //4 k bd jaisy h num mn 5 value ae , us loop k 4 k bad khatam hua 5, to sbsy pehly ye condition execute hogi phr 5 print hog
    

//     }
//     console.log(element);
    
// // }

// // i ko reuse bhi krskty q k uska scope uper khtm hogaya, just like in loop if you use ifelse same as you can use loop in loop 
// // i ko reuse bhi krskty q k uska scope uper khtm hogaya, just like in loop if you use ifelse same as you can use loop in loop 

// for (let i = 0; i <= 10; i++) {  
//     console.log(`outerloop:${i}`);

//     for (let j = 0; j <= 10; j++) {
//         // console.log(`inner loop value is ${j} and innerloop value is ${i}`);
//         // console.log(`iner loop value ${j} and inner loop ${i}`);
        
// //     }
    
// // }
// // j  kandr i value ka access h q k app i k andr h, sbsy pehly thi val 0 to inner loop mn gahy to inner 10 br print hog, q k andr k loop ko to 10 br chlna h th

// for (let i = 0; i <= 10; i++) {
//     console.log(`outerLoopValue: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(i + '*' + j + '=' + i*j);
        
        
//     }
    
// }
// //ab hum 1 arr bhi declare krlyty, ab ye loop , myArr p lg gaya simply waisy array p lagany k liye or better structure h j.s mn but basic hm dykh lyty, ab hmn pata h arr ka index 0 s strt hota h, kb tk chlana es index ko jb tk ye arr ki lngth s wo chota rhy.

//array ki lenght 3 hai humny ussy less chalaya h, <= nae likha q k arr mn flash 0 h, <= agr aisa krdngy to app arr s bhr h chle gahy to aisa karna to thk nae h to undefined milega appko , j.s mn out of bound exception nae hoty h, but ye undefined in itself big problematic thng, remembr ye undefined nae ana chahye



// let myArr = ['flash', 'batman', 'superman'] 
//  for (let index = 0; index < myArr.length; index++) { 
// //     const element = myArr[index];
// //     console.log(element);
// // }

// let myArr = ['flash', 'batman', 'superman'] 
// console.log(myArr.length);
//  for (let index = 0; index <= myArr.length; index) { 
//     const element = myArr[index];
//     console.log(element);
// }
//ye index++ ka bht role h agr sirf index ho to abhi appny koi condition to chng h nh ki, chng agr nh karagy to loop whn k whn chlta jega, cntrl c sy roka h, ye jo condtin chng hoti eska chng hona bht bht zrori h

//ab chlty kuch keywords k bry mn appko pata h k appny loop mn 1 sy 10 tk print kia, arr prnt kia but its not necessary k appny 1 dafa strt kia to pura h prnt karna, suppose database s value ati appky pass 1000 books ka data aya, ab hazar book 1 br mn 1 page p to prnt nh karni ya card mn shownh karni 1 br mn, hoskta 5 h show karni or agly pg p 5to10 krng, to aisi kahi condtn ati k bech mn koi cndtion age to usky bses p loop ko hatana to keyword h two break and continue, code mn demonstration dain , contine ko smjhya to raat guzr jegi


// for (let i = 1; i <= 20; i++) {
//     console.log(`valu pf i is ${i}`);  //variable inject

    
// }

//jaisy h 5 detect hojae mn es loop k bhr jao, console s phly lkhna hog wrna 5 prnt hojaeg



// for (let i = 0; i <= 20; i++) {
//     if(i == 5){ //5 detect hojae to kch krna h
//         console.log(' detected 5');
//         break //appko yd ho to swich cse mn bhi use kia th

//     }
    
//     console.log(`value of i is ${i}`);
    
// }
// break s control execution ko seedha h bhr phnk dyty ho, to baqi ka print nh hoga

// 5 jaisy h detect hui appky loop n km krna h bnd krdia app seedhy jmp krghy line 40 k bhr// hmny swich cse mn bhi dykha th k jhns s bhi brak aajata whn s control flow pura bhr chala jta h, usky bd kuch execute nh hota, agr whn break nh hota to default etc sb h print hojaty, 

//continue khta yr 1 br maaf krdo, continue khta k appka jo condtin h usko 1 br k liye skip, jaisy h detect hogae conditn or cntnu agaya to, 1 br mn jo yhn print hona h wo nh krng, lkn aisa nh k mn loop s bhr h aajaong
// for (let i = 0; i <= 20; i++) {
//     if(i == 5){ //5 detect hojae to kch krna h
//         console.log(' detected 5');
//         break //appko yd ho to swich cse mn bhi use kia th

//     }
    
//     console.log(`value of i is ${i}`);
    
// }

//loops k bht version h or bht variety h, prgrmmng mn 1 km krny k 10 nh 10,000 tareeky mlgy, choices bht h yhn, why loop do why loop km same h, woi repeatiton h bas syntax ka farq h, syntax bari picture overview, to appko languges switch mn not msla, ap khgy loop to loop h arr p bhi esi trh lgta h, jaisy for s while loop ka syntax chng h, waisy while loop s phython ka syntax chng h 'mainy bht bry bry code bases dykhy or ye bhi dykha h k unky andr sary progrmmers 1,2 trhn k h loop use kr rhy, maybe coming 2,3 years app do while oop 1 dafa bhi na likho

//WHILE******************DO WHILE LOOP
// while mein app condtn h chk krty ho or hr br usy  execute h krty h, to condition ka initialization or incremnt, wo bhi likhna hoga loop koi bhi ho process wi rhega k kuch value initialize kr, condition chk kro phr us value ko constntly increment ya decremnt kro chg lao usmein taky khn ja k terminate krdain loop ko
// let index = 0
// while (index <= 10) {
//     console.log(`value of index is ${index}`); // ab incrmnt dcrmnt kuch to krna hg wrn loop phr s infinite mn chala jaega, aisi cindition lkhn jo termnte krti ho loop ko zaroori nh incrmnt or dermnt h
//     index = index + 2
// }

// let myArray = ['flash', 'batman', 'superman']
// let Arr = 0
// while (Arr < myArray.length ) {
//     console.log(`value is ${myArray[Arr]}`);
//     Arr = Arr + 2
    
// }

//esmn ab lnght calcult hojaegi to mjhy incrmnt or decmnt krny kuch khas nh

//DO WHILE LOOP**************************************

//pehly appka km hoga codition appki sbsy lst mn chk hogi

// let score = 1
// do {console.log(`value is ${score}`);
//     score++ //score appny kbi chng h nh kia brhya h nh to ye to cntnsly run hota rheg to score++
// } while (score <= 10);  //ab kb tk prnt krwana


let score = 11
do {console.log(`value is ${score}`);
    score++ 
} while (score <= 10);  
// run kia aya score is 11 q k esmein kam pehly hota condtn bd mn chk hoti, aj udhar dedo kl wapis dydngy, ary mry ps to pisy h nh.
// rare use hoga usually we prefer to chk conditin first, regulr flows mn but yes exception sb jgh h// 
// ye hogya hmara basic now we h loop jo specialixd h, array p loop lagany k liyr, bht comon h arr p loop lagana jb bhi app database s value fetch krgy 10 values 5 vlus , theycome always in arr formt, apis mn appko array ki frmt mn dyny, arr p lop bht cmn h to kuch specialzed loop banhy gah, kch arr ki drct propertes bhi hoti h lops k liye availbl




















