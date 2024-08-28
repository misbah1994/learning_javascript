// const newHero = ['hulk', 'spiderman']
// newHero


//  in this video we talk js beghaivir called prototypel bhvr , //jaisy h kia undefined to hmny return nh kia declare hogaya memory mn space chali gae ab jaisy h nerHero likha to conslebro mjhy kuch new information bhi deta h to 0th position mn huld or 1th p spidermn or lenght h 2 elemnts or phr prototype name ki chz h , js kka jo 1 default behvr h wo h prototypal bhvr uper s uper, js har nh mnati or usky uper s layer p ja k dykhti or dykhti to prnt ko grndparnt ko acces krti or grnd grnd , hr nh mnti jb tk usy null value na ml jae , es bhvr s linked ho k appka jo this keywrd h wo bhi kam krta ,kahi log khty arrow fun mn hamary pass this ka acces nh hota wo esi liye k ye prototyp whn ajata , abhi k liye etna jan ln k prototyp h wo h jo appko new keywrd ka acces dyrha ya wrkng mili hclasses appko mili h es k throuhg h mili h or appka this bhi esi k throgh kam kr rha or jo appka prototype inheritance h wo bhi esi k throgh, esy khud s nh pata to ye pchny mn nh ghbrati , prototypal inheritnce mtlb yhn nh mila or upr or uper, ab or open kia to getter or setter ml rhy or nh mil rha 

// // to ye prototyp rukta khn h furtherdetail mn jata rhyta stop khn hota h , to supose sbsy phly arr th arr mn prototype aya , end mn obj level ka prototype mila phr further mjhy getter or setter proto mn mil rhy but obj type ka mlna bnd hoga esy smjhty hm diagrm s , obj kch bhi declare krn string obj kch bhi abhi arr lylyty. js mn arr bhi obj h . object ka prnt kya hai to obj ka koi prnt nh hota h usmn jo proprty h jo sab h wo usi ki rhti h , yhn jo prototyp ka rfrnce ata wo actully mn null ka h aata , gettr str mlty but basixc appko dyhna prega.ab strng bhi app dykho to ye prototyp redirect khn horha obj p h or obj final null p jrha to end of the day we say in js everything obj and property that is availble in obj also available in arr or string but usable h ya nh wo alg bt hai but inheritance h , jo grndprnt s milega wo h to its upto you you used or not ab fun ye kya h to ab code p chlty,
// function multiplyBy5 (num){
//     return num*5

// }
// multiplyBy5.power = 2
// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype); // ye jo prototyp h ye sirf method nh actually mn kch proprties bhi deta h

//essy hmny smjha k js mn hr chz obj hoti h h , fun fun bhi h or obj bhi fun mn appki proprty, jo bhi erkng or funtinality h wo fun ki trhn bhv lkn app chahn to kisi ko bhi fun ki trhn bhv krwa skty hn, q k end of the day hr chz milti h ja k appky obj s , obj ka prototyp null h hojata h , tchniclly we said fun bhi rfrnce obj ko h krta h 

// to kya mn chahn to kch funtionlity iject krwao like i know in arr .lenth also prototy s mjhy kch funtinlity milti bydefault .map slice to kya mein meri funtionlity bhi inject krwaskta hn , obj h to h akhir kaar obj mn prprties hoti or 1 koi property hamara fun hold krlegi .prototyp mn hmny incremnt inject kia , ab create user k users alg alg hoskty hn 1 chai or 2 tea

function createUser(username, score){
    this.username = username
    this.score = score

}
createUser.prototype.increment = function(){// ye sb hawa mn tha new lyny s pehly jo new laingy nechy
    // score++
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    

}  //ab printme nam s 1method banalia ye lijiye  fun , ab ye mthd kya karna consolelog krta 
const chai = new createUser('chai', 15)  //jb appny fun 'createuser' sy es 'chai' mein value tranfer ki to appny usy bataya nh k meiry pass ye additionl property ae hn , to ye batany ka sara kam actually mn new keyword krta h ,

const tea = createUser('tea', 150) 

chai.printMe()



// ab ye dono chai or tea 1 h fun use kr rhy hn to incremnt method s mein score kiska brhao, or fun p ja k uper s tapak k beth gaya appna methd create user , ab creatuser ko kaisy pata kisko brhana h kisny mjhy call kia , to ye cntxt dyny k liye hm , this ko yd rkhny ka behtreen tareeka hai 'jisny bhi' to jisny bhi bulaya usky pass jao 
//notes
//heres what happns bhnd the scenes when the new keyword is used 

///a new object is created , the new kewrd initiates the creation of a new js obj.

//a prototype is linked: the newlycreated objcts get linked to the prototype property of the constructor fun this means that it has access to properties and methods define on the constructor's prototyp .


//  js classes k through constructor fun nh deti, js new kywrd k through cnstructr fun deti h , new keywrd lagaya mtlb jo classes mn obj k sath kerty ho new keywrd laga k 1 new istace cret krdyty ho obj,ye sara kam appka new k sth hota h , ye 1 approach h to etna depth mn koi jata nh to 1 kam karo new developers jo aaty uky benefits k liye seedha class keyword ka h syntax dedo, classes nxt vdo mn dnga, bhnd the scen to yae kam h espr wrpr laga dia gya h 

// createUser.prototype.increment = function() ye sb hawa mein th jb new keywrd lagaya to usny kha k mjhy ab assemble krna h , phr usny 1 obj lia us obj mein 1 prototyp injct kia phir ary protoyp to injct kardia ab methd bhi dfn krain 'createUser.prototype.printMe', phir usky bad kaha achaaaan esky bases p banana h 
// function createUser(username, score){
//     this.username = username
//     this.score = score

// }

//the constructor is called: the constructor fun is called with the specified arguments and this is bound to the newly created obj. if no explicit return value is specified from the constructr, javascript assumes this , the newly created objjct, to be the intented return value.

//the new obj is returned: after the constructor fun has been called, if it doesnt return a non primintive value (obj, array , fun, etc) the newly created object is returned
// abhi tk jo example lia wo object ko smjhny liye usmn es new keywrd ko smjhny k liye