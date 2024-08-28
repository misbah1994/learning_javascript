// let myName = 'hitesh'
// console.log(myName.length); // 6 ae

// let myName = 'hitesh     '
// console.log(myName.truelength); // undefined
// console.log(myName.trim().length); // kch log aisa krny ko khngy but ye low IQ wali bt hojaegi k smjhana cha rha ho k ye funtinality bydefault app bakein kaisy krskty hr string k sath agr 
// let myName = 'hitesh     '
// let myChannel = 'chai   '  
// agr es trhn hota to kya br br .trim krty 
// console.log(myName.trueLength); //methd
// console.log(myName.trueLength()); // property 

// let myHeroes = ['thor','spiderman' ]
// let heropower = {
//     thor: 'hammer',
//     spiderman: 'sling',
//     getSpiderPower: function(){
//         console.log(`spidy power is ${this.spiderman}`);
        
//     }

// }
// Object.prototype.hitesh = function(){
//     console.log(`hitesh is present in all objects`);
    
// }
//arr mn agr kuch inject krna to, ab technically ko myHeroes k pass to heyhit ka access  hona chahye or heropower k pass nh hona chahye theory mn q k obvious downthe line chain nechy waly ko to access dedia h upr waly ko apny ap thori mil jata lakin top level ko dedia to sb whn s pass ho k jarahy to sabko mil jata

//   now we test agr mn power array ko dn to kya ye bydefault obj ko chali jati?

// Array.prototype.heyHitesh = function(){
//     console.log(`hey Hitesh`);
    

// }
// myHeroes.heyHitesh() // q k arr ko access dia th to ye chl gaya

// heropower.heyHitesh() //yhncode fail to yhn access nh h 

// heropower.hitesh()
// myHeroes.hitesh()
 // mn kya chahta k kbhi bhi koi bhi agr obj  he declare ho to base us obj mn h declare krdo, agr hmny diagrm waly obj mn h kuch superpwr dal di to fun arr or strinh esi mn s to ho kr guzry gy, sbky pass ani chhye technically bhi

// factory fun mtlb uska bydefault fun jo usy create krny k liye use hota

//ab arr bhi to obj s h guzrega to usky paa bhi ye power honi chahye appny arr to declare kia hua h hai myheroes to appny seedha top level ki herarchy access krli, obj mn 1 new proprty add rli or access krliaa

  // function
  //array
  //string 
  //  ||
  //   v
  
  // object =->  null

//   now we test agr mn power array ko dn to kya ye bydefault obj ko chali jati?

//////////////////////////////orrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
//purana type code h km milega to phly k time mn classes to hoti nh thi to aisy h obj banaty thy hr chz ka , or aisy h obj mn properties or fun add karty thy 
// const user = {
//     name: 'chai',
//     email: 'chai@google.com'
// }
// const Teacher = {
//     makevideo: true
// }
// const TeachingSupport = {
//     isAvailable: false
// }
// const TASupport = {
//     makeAssignment: 'js assignment',
//     fullTime: true,
//     __proto__: TeachingSupport //yhn app bol skty k appka jo yhn prototype h usy rfrnce krdo hamary teachng support s , ab TA support s app new kr k further obj banaogy to usky pass appko access mil jaega , aisa nh k eska access app andr ly skty balky bhr bhi ly skty ho

// }
// Teacher.__proto__ = user //to tchr bhi user ki sari proprts access krskta h, yae prototypal inheritance h k app kaisy kisi r ki proprty ko access krskty ho, ye approach outdated h aisa nh k nh hoti , aj k time p hamain modern syntax milega neechy dykhty

//hr obj appny app mn alg instnce h aisa nh k aps mn chzn share kr rhy hn , sbki alg alg properties h default property to sabkypass h .lenght prototyp, koi aisi situton jhn app infrmtion exchng krna chty ho en dono ko hm aps mn link kr rhy 

//modernSyntax//
// Object.setPrototypeOf( TeachingSupport, Teacher) // yhnlyta k kiski proprty khn inject krni h , teachngsupport ko kaha k teacher ki properties access krlo, to ye appka prototypeinheritnce h k kis trhn app khud bhi inheritance krwaskty , classes mn thory keywrd alg hojty extnd etc but behind the senne woi chl rha prototype h syntxticl suger h, senior dvlpr ko bhi nh pata aisa horha h or bry bry code likh rhy wo bhi  chl bhi rhy wo achy .

//  ye sb jo inheritance batana to ussy phly h appko idea lg gaya hoga k jo mn phly chah rha th bilkul stst mn to mn chah rha th k string mn dirct h methd mil jae truelenght , proprty bhi ly skty k 1 proprty bhi add krdo method bhi add krdo , method wo us prprty ko update krdy wo bhi hoskta but i want mjhy direct h mthd mil jae, to appkoidea lag gya hoga k sari srtigs ko sari superpwr dyny k liye appko kya krna hoga 

let anotherUsername = 'chaiAurcode    '
String.prototype.trueLength = function(){
    console.log(`${this}`); // chai aur code mila es this mn q k anotheusername mn refernce chaiAurCode ka th 

    console.log(`${this.name}`); // undefined obvious this.name ka access nh tha absolete property h pehly k tym p hota th abhi chrcha nh krngy

    console.log(`true length is: ${this.trim().length}`);
    
    
    
}
anotherUsername.trueLength()
//functinlity jo h wo to hogi usko to avoid nh krskty, abstraction to de h skty hn 
'hitesh'.trueLength()
'iceTea'.trueLength()
// its your bsic agr mn jana chahn to protyp or in k andr jana chn to or bhi depth mn jskta , appky execution cntxt ko open krskta , whn 1 , 1 local memry or globl memry dykh skty khn kya kya acces h , abhi k liye etna kaafi h , bhn d the sene appka yae chl rha ye jo ap jitna bhi soch rhy classes, objct oriented prhngy nh prhahn gy  js mn , actual mn appka js ka objOriented yhn khtm hogaya h , ab jo bataonga classes wo to bs syntax h wo to cvr krny wali bt h appka thory or bhnd the sene yhn htm hogaya 








