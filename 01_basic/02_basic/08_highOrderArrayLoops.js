// for of loop, esky andr hm 1 es trhn ka loop prhngy jo k 1 higher order fun, ziada kch h nh huwwa bna d jati h , ab jo hm loop prhny wly hn ye sb arr specific loop h, arr or obj j.s mn bht pwrfl h
//1 cmn sittution jo appko milegi na to ye 1 [] h esmein hm string dalty ["", "", "",], es trhn arr mn hm obj bhi dalty hn
// [{}, {}, {}] //to ye bht h comon scenerio h k arr mn appko obj milngy or hr iteration mn appko obj mn s kch value nikalni, to phly loop lagaiye, phr obj k andr jaiye or .notation s ya square notation s 1 value ly k aiy
//ab ye jo iterator of obj hai essy confused mt hon, aisa nae k ye obj k liye h km ata, obj bhi apky iteratablle h, array or sstring bhi iterator h uspy bhi app loop lga skty, yhn ye ji iterator h i ya val ya num koi bhi nam, value jo declare krty thy app chhn koi or value lyln
//ye obj 1 broader term mn use kia jrha h k kis obj p app loop lgana chch rhy, esy j.s k obj s mt lijiyrga yhn lang ka thora prob h, yhn obj ka mtlb k kis chz p lagana
//etna h krna ye khud h pata karlega k b loop end hrh, kb us vlu ki sze ky h, appko kch nh krna ap srf variable declare kijiye or kispy loop lagana or bs chr diiye, koi incremnt nh koi decrmnt nae


// const array = [1, 2, 3, 4, 5]
// for (const num of array) {  
//     console.log(num);  //bs num prnt krwana no incrmnt no decrmnt
// }

// const storytelling = 'brand Specialization'
// for (const words of storytelling) 
//     {
//     console.log(`each character is ${words}`);
    
// }


// const greetings = 'hello world!'
// for (const greet of greetings) {
//     console.log(`each character is ${greet}`);
    
// }
//esky andr app chahn to appny bascs lga skty hn, agr space detect ho to, mein usy nh print karwana chahta continue keyword use krskty ya app chahty space detect hojae to mein pura h exit krjao, break keyword use krskty

//MAPS , 1 trhn s array jaisy h hoty hn, thora s esmein iteration etc ki trhn hota agy ja k bt krty, map itself object, ko duolicte value nh hoti appko sab unique milti
// const map = new Map
// map.set('Pak',"Pakistan")
// map.set('USA',"United State of America")
// map.set('Fr',"France")
// map.set('In',"India")
// console.log(map); //woi obj ki trhn h



// const map = new Map
// map.set('Pak',"Pakistan")
// map.set('USA',"United State of America")
// map.set('Fr',"France")  //agr mn khn ye frnce dobara neechy print kia to wo run p nh ahega ye uniqueness h map ki
// map.set('In',"India")
// map.set('Fr',"France") //ye nh hoga prnt, ye eski uniqueness h or esi ordermn h rhegi

// console.log(map); 
//ab bt ye h k kya mn espy loop laga skta or agr hn to kaisy,
//ab agr mn es map mn loop lagata to es iterature ki jaga mn eski value lyta hn key, ab agr mn esko print krn to kya krn uski value print hogi ya key

// const map = new Map
// map.set('Pak',"Pakistan")
// map.set('USA',"United State of America")
// map.set('Fr',"France")

// // console.log(map);
// for (const key of map) {
//     console.log(key);
// }
//ary ye to arr h wapis agaya to appky pss 1 shortcut hota h, app 1 [key, value ] square brck lagahn or phir app key or value ko alg alg hold krskty ye hojata arrr ka destructure

// const map = new Map
// map.set('Pak',"Pakistan")
// map.set('USA',"United State of America")
// map.set('Fr',"France")


// for (const [key, value] of map) { //jb app aisy key or vlu alg alg lyty to appny map lia const
//     console.log(key, ':-', value ); //key or value dono lyli or destructure karlia arr k andr
// }

// //agr obj hota to forloop of 
// const myObject = {
//     'game1': 'NFS',
//     'game2': 'SPIDERMAN'
// }
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value ); //run myObject isnt iterable, esliye maps iteratable h obj ko iterate krny k liye dsry treeky h

// }

// object k liye forin loop , zarrori nh k ye forin srf obj p he lage

// const myObject = {
//     js: 'javascript',
//     cpp: 'c++',
//     rb: 'ruby',
//     swift: 'swift by apple'
// }
// for (const key in myObject) {
//     console.log(key);   //run kia to sari keys aagae hamari but keys k sth sth obj bhi chahyega
// }


// const myObject = {
//     js: 'javascript',
//     cpp: 'c++',
//     rb: 'ruby',
//     swift: 'swift by apple'
// }
// for (const key in myObject) {
//     console.log(myObject[key]);
// }



// const myObject = {
//     js: 'javascript',
//     cpp: 'c++',
//     rb: 'ruby',
//     swift: 'swift by apple'
// }
// for (const key in myObject) {
//     console.log(`${key} shorcut is for ${myObject[key]}`);
// }
// //ab kya ye forIn loop arr kliye use hoskta?
// const programming = ['rb', 'python','js','c++']

// for (const key in programming) {
//     console.log(key); // sari keys ae 0,1,2,3 in vertical
// }
//to ye for in ka hai, for of mn appnydykha ye seedha h value utha deta h, or map mn bhi seedha keys aagae thi, arrays ki bhi keys hoti to object ka design h esliye hua tha k app jo mrzi keys daal skty lakin arr mn bydefault 0 s h strt hoti


// const programming = ['rb', 'python','js','c++']

// for (const key in programming) {
//     console.log(programming[key]);
    
//     console.log(`${key} is for ${programming[key]}`);
// }

// const map = new Map
// map.set('Pak',"Pakistan")
// map.set('USA',"United State of America")
// map.set('Fr',"France")

// for (const key in map) {
//     console.log(key);// koi error nh kuch nh lkn prnt nh hua q k ye jo map h na ye iteratable nh h to agr koi cheez iteratble nh h to usy es trhn loop mn nh likha jta
// }
// obj p loop lgna ho to phatak s for in lga lngy or arr p to for of lkn arr p or bhi kfi loops h
//const coding = ['js','c++','java','python','ruby'] esko console mn likha to prototype mn kafi cheezain ae, foreach bhi mlega to ye actlly loop ka h 1 parameter h jo bydefault h inject kia hua h q k sbhi ko pata h k array agr ahngy to uspy loop to lgana h parega na, kch to kr k iterate kr k value to chhye h hogi na uki, ab app coding lijiye or . laghngy to sary method whn ajaty
//kuch loops arr mn direct h property mn add krdiye jty hn
//coding.forEach()//  ab esny kha k mjhy 1 fun dedo jaisy appny uper dykha arr h obj h uspy automatically jarhy thy hmny enki lnght nh batae kuch nh batae, esi trhn ye jo fun h enhn bht idea h ye appny app jnty hn k, ks value mn ktna bara arr h kya uski lenht h, 0 s strt karna apko bas 1 fun dyna 
// coding.forEach().ab es function ko callBack kaha gaya to dfrnc bas ye h k, callbck jo funhota pehly to uska nam nh hota, usky bad fun k bad jo parameters hoty thy, to automatically ye loop etna smart h k, hr values p ja ja k jaega, ab us hr val ko ap bolna kya chahty ap jo b bolo a, bolo,b bolo, hr arr mn item h to hm esko item bol dyty, automatically hr br ye fun execute hoga, or hr br es value ko ye ly k ayega appny andr as a parameter, ab apko es val k sath jo bhi krna ap us fun ki body mn karskty.
//summary :- q k ye fun callback h to eska nam nh hota q k ye array k andr chl rha h to ye jo value hogi appny app parameter ki trhn val ly k ahegi, ab usko val boliye value boliye item boliye jo ma kare appka

// const coding = ['js','c++','java','python','ruby']

// coding.forEach( function(item){
//     console.log(item);

// }) //ba humny fun lia or as it is pass krdia bht h asaan h
//1 or variation h eski, jee ap esmn arrow fun bhi use krskty hm arrow fun likhty thy like name = () =>{} to yhn bhi nam likhny ki zaroort nh

// const coding = ['js','c++','java','python','ruby']

// coding.forEach( (item) => {
//     console.log(item);
// })

//suppose ap 1 fun likhty jhn p
// const coding = ['js','c++','java','python','ruby']
// function printMe (item){  // ye 1 item lyta appny ps or jo bhi ap esko dyty print krdyta
// console.log(item);
// }   
// // //kya mn es fun ko bhi pass on krskta

// coding.forEach(printMe)  //ya to app yhn fun likh lo phir to nam hatana parega or agr kahin or likh rkha h to printme ko as a parameter lylo, uska reference dy rahy execute nh kr rhy
//or iteresting seekhty hn

// const coding = ['js','c++','java','python','ruby']
// coding.forEach(  (item, index, arr) => {
//     console.log(item, index, arr);

// })
//[{}, {}, {}] ye foreach mn kafi use kia jata
// const myCoding = [
//     {
//         languageName: 'javascript',
//         languageFile: 'js'
//     }, 
//     {
//         languageName: 'java',
//         languageFile: 'java'
//     }, 
//     {
//         languageName: 'python',
//         languageFile: 'py'
//     },
    
// ]
// myCoding.forEach(   (item) => {
// console.log(item.languageName);
// })
//appn arr k andar object k andr uski 1 value nikal li property, ab yhn to 2 valu thi maybe 20 ho, ye appky database mn bht km any wala , database s appky ps 1 arr ata arr mn mobile ka nam pricing , uska bylink ata, arr aya appky pass 10 mbl, appny sbka value inject krdia webpage p, or 1,1 webpage mn appky pass cart ajata mobile ki photo, nam or price aajati,  
//ab ye item jo h na , ab yhn apky pass jo access h wo es obj ka h, or us obj mn ye 2 properties likhi hui h, ab us obj ka nam appny item bol dia to hr iteration mn appny usko item h bola , ab item, lang ka filenam chahye ya name, kitni asaani s appny arr k andr obj jo itself complex, 2 mnt mn uska access lylia coz your foundation strong






















