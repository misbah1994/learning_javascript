// <!-- lecture 47
// interviw mn pucha mainy,j.s mn math.pie ki value hoti h 3.14 mjhy usy krni h 4 ya phr 3 , kch log bolngy k nh to q bolngy wo cnstnt h to appko js ka bts nh pata kya chl rha to app jwb nh depaogy brwsr p ja k console mn  const myNewObject = {userName: 'username'}, 

// myNewObject ab esmn prototype ki kch proprty to h , sbko yhn aa k inherit krty hn lkn eski khud ki bhi proprts hn , jaisy cnstrctr eska khd ka h new kw class sb yhn s chl rh or bhibht, ye obj k bry mn kch hiddn chzn kk bry mn  btati jo k appny shyd nh dykh hogi , hm 1proj kr rhy thy or DB mn 1 balue dalni thi third party db, db to nh backend as a service use kr rhy thy whn s jo return respond arha th wo dkhny mn to arr th , obj h tha 1 trhn s us obj p loop nh lag rha th resech ki to pata laga k actlly uski 1 prop diabled th jo k usy iterate karny k liye , obj bhi iteratable roky jaskty hn , ab suppose appko kisi obj ki prop k bry mn janna h to app uska nam likh skty yhn Math, mein bt kr rha hn math.pie ki ye 1 univrsl constnt h to agr esko app ovrwrt karna chahn to nh krskty n , to q nh krskty bts whn ly k jta hn 


// -->

// console.log(Math.PI);
// Math.PI = 5 
// console.log(Math.PI); //apny to ovrrt ki lkn ye hui nh 
// const descripter =  Object.getOwnPropertyDescriptor(Math, 'PI' ) 
// console.log(descripter); //run ki to hardcoded valu pi ki likh rkhai or writabl false, enumerble false, configrble false, q k ye implimentaation h hmary js ka browsr mn ya node m to app kitni br bhi overwrt ki koshsh kro ye proprty etni ziada detaild indepth hardcoded kr rkhi c++ mn or chks bhi hn  app true nh krskti to kya hm hmaary obj ko deskty hardcoded

  //pi appki prop ka name hai or 3.4 uski value h to math jo pura mojule h usmn s chahye mjhy value pi ki .

//////////////////////////////////////////////////////////////
//ab obj declare krny k or  bhi bht s treeky hn app factory fun bhi use krskty obj.create by default es mein value null hoti h app obj bhi dalskty hn const myNewObj = Object.create(null), hm dirct bnalyty
 
// const chai = {
//     name: 'gingerChai',
//     price: 250,
//     isAvailable: true
// }
// console.log(chai);
//kya eski bhi descripter proprty hn, to kaisy mn set krskta  
// console.log(Object.getOwnPropertyDescriptor(chai)); //agr mn srf chai krta to undefined h q k appny kya kha h k property ka descriptr do to chai to obj h to chai mein se mn longa name

// console.log(Object.getOwnPropertyDescriptor(chai, 'name')); //run
// value: 'gingerChai', //ye sb aya 
// writable: true,
// enumerable: true,
// configurable: true
//to js wo cntrl appko degi but hr jaga nh k khn app koi wabal macha dain

// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false


// })
// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// ab hm thori dair k liye obj,dfnproprty ko cmnt rkhaingy or loop laga k dykhty hn , forof loop obj k liye easy rhta
// for (let [key, value] of Object.entries(chai)) {
//     console.log(`${key} : ${value}`);  //run kia to chai iteratable nh h q k ye obj h , ab obj by default iteratable hota nh hota ye alg alg situation p depend krta h , ab obj ly k uski entries ko iterate krskty 
    
    
// }

//let krngy tky chnge ho or obj mein dirct chai rkha ab dykhty hn
//////////ORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
//ab code phatega kb q k ye obj h  
// const chai = {
//     name: 'gingerChai',
//     price: 250,
//     isAvailable: true,

//     orderChai: function(){
//         console.log('code phat gaya');
        

//     }
// }
// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));



//     for (let [key, value] of Object.entries(chai)) {
//             console.log(`${key} : ${value}`); }
//to ye jo fun aya ye nh chahye hota appko keyvalue h chahye hoti h
//ab hm chks laga skty hn 

// const chai = {
//     name: 'gingerChai',
//     price: 250,
//     isAvailable: true,

//     orderChai: function(){
//         console.log('code phat gaya');
        

//     }
// }
// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));



//     for (let [key, value] of Object.entries(chai)) {
//         if (typeof value !== "function"){
//             console.log(`${key} : ${value}`);
//         }
//              }
             //ye situation app real wrld mn hndle karaingy 
      //ab yhn mn inumeration false krnga        
const chai = {
    name: 'gingerChai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log('code phat gaya');
        

    }
}
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
Object.defineProperty(chai, 'name', {
    enumerable:false // jb mn true krnga to name ahega 
})



    for (let [key, value] of Object.entries(chai)) {
        if (typeof value !== "function"){
            console.log(`${key} : ${value}`);
        }
             }
//to run kia to gigerchai nh aarha h price s horha h 
             //to aisa configurtion hoskta h k app ki jo proprties h to, obj ki jo proprties h wo kch appky loop k prt h na bane

//48 lectr getter setter and stack overflow
//mn appny paid courses mn higherOrderFuntion backend k sth prhata h, to 1 special usecase hota whn , hmny array k map reduce etc dykhy ye bhii 1 trhn s higher order fun h h 












