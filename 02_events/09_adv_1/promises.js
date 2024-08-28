
    //promises s cncpt bnta .then ka or .catch ka lakn 1 internal tool bhi appko mlta jisy khty hn fetch abhi jo hmny xhr s request k h web req aj kal log seedha use krty fetch ye 5 lettr word fetch behnd the sene bht kam krta h usky liye hamain promises smjhny paregy tb hm bt kaaraingy browser diag kya hoty netwokcall kya hoti browser api kya hoti , j.s mn classes nam ka concept km hota, hota h aj kal hota h lkn almost hr chz ko as a obj rfrnce dykha jata h prototype rfrnce dykha jata to usi rfrnce s dykhiyeg, ab agr app koi baggag ly k arahy appny sath k javalang ka c++ ka ya kisi or ka jhn classes object hoty hn new keyword dykhty h dmgh mn obje ata k es class s 1 obj bana dyty to pls hr lng alag h us lang ko alg rkhiyrga , promise ka mtlb h k jo bhi appny usko tsk dia h wo abhi k abhi que mn lg k cmplt nh hoga , q mn to lg gya lkn abhi k abhi usy load nh kia gaya abhi complt nh hua .
    // zrori nh k sary kam abhi ho bht sary logon k dmgh mn 1 h chz ati h k network request agr bheji h to wo bd mn cmplt hogi nh nh aisa nh bht s kam h jo display utni sped s nh hoty jitni speed s progrmng calction hoti h ya phir progrmng ka pura ka pura interpretor hota for exampl agr app file ko access kr rhy hn system s to obviously appny networkng mn prha hoga k file drctly access nh hoti h progrm k throuhg , appko curnel ka access chhye hota phr curnl appko fle la k deta , srf etna nh kahi br opertion calcultv hoty hn agr appny databs ko rqt bhji h hoskta h database netwrk mn kis or continnt mn rkha ho hoskta whn s response ahega hoskta respons fast agaya ho calcultion krna chah rhy usmn time lgta ho, kahi br passwrd incript krty usmn bhi time lgta to aisy bht s operation hoty hn jhn hm asynchro progrmng krty, direct nh horha  hn, us case mn 2 h opt h hamary pass ya to async await laga lain jb tk kam nh horha wait kro asychronous operation h , lkn modern progrmng mn hm ziada tr promises use krty , proms future mn ja k cmplt exmple crytography opertion, networkng. file systm . specially jb app mbl devlpmnt krty kahi br app sound devices ko activate kra chty camera device ko want activt whn appko future promses h dykhny hoty  , promises mdn s prhny 3state hoty .

    //ziada tr app dykhogy hm promise consumed h kr rhy hn , promises create bhi hoty hn ziada tr consumed hoty hn sabsy cmn example mn dlt krdga esy hm bd mn prhngy fetch kia appny koi webrequest h url h, agr response ahega to .then mn or koi error hoga to .catch mn or thora acha tutorial to .finally mn sb ajahega 
    // fetch('http://somthng.com').then().catch().finally()
    // yae appky fetch h yae appky promises h nh nh esy cnsumed krny s pehly appko smjhna prga k promises ko consumed nh actually mn banaya kaisy jata promises ko , jb tk banana nh seekhogy tb tk achy s promises nh ahega 

    // //promoise 1 obj hai agr appko js mn obj ka 1 or instance chahye to wo same h almoost jaisy app class ka lyty to new keyword s appko mil jata 1 instance , classes to h nh yhn py classkeyword h , ab chlty history p stackOverflow ka article h ab ye proms mn q or bluebird kis chirya ka nam h , jb prom nh th js mn jb bhi bht sa kam async hota th to us time p bydefault asyncawait use krty rho but promss ka syntax bht acha th bht or features mlty thy to develprs ko lgta th use kro to kch libraries hoti thi q or bluebird usky through core js mn app wo sari funtionlity use krskty ho jo abhi app .fetch catch then use krty . phir es lib ko finally integrate krlia gya js mn ab ye bydefault aati , promises appny andr 1 call bck lyta h 1 trhn s callbck hell jo hojata h yani callbck k andr callbck k andr clbk usko bhi reduce krta h , proms mn fun hota esky 2 part hoty resolve or reject , .thn mn 1 callbck milta yani fun mlta jisky sath app jo bhi km krskty ye fun automatically 1 argumnt rcv krta h jiska kam h jo bhi uper s ka hua h wo value return hoti yhn p. ab hmn resolve or .then ko cnnct krna h to resolve 1 mrthd h usy call kia ab jb ye execute hoga  tb ye actly mn .then s connect hua h resolve() 
    const promiseOne = new Promise(function(resolve, reject){
        //do an async task
        //db calls, cryptography, network 
        setTimeout(function(){
            console.log('async task is complete');
            resolve()
        },1000)
    })

    promiseOne.then(function(){
        console.log('promise consumed');
    }) //resolve k sath connection h .then ka 

    new Promise(function(resolve, reject){ // variable mn hold nh kia 
        setTimeout(function(){
            console.log('async task 2');
            resolve()
        },1000);

    }).then(function(){
        console.log('async 2 resolved ');
    })
//ab hmny 2 prt mn krny k bajhy 1 h part mn krdia q k hmnyvariable mn hold nh kia h , ab new proms create kia ab ye new promise network rqst laraha ho file hndlng kr rha ho kch bhi kr rha hmn koi mtlb nh , 1 sec 2 sec bad jb bhi ye evntually cmplt hoga  tow wo sara kam hojaega usky bad ye resolve inform krdega automatically .thn ko , thora sa syntax dykhny mn appko weird lg rha hoga q k last time jb hmny bt ki thi tb hm es trhn likh rhy thy k sara kam khud h horha h request url bana rhy sab open kr rhy phir onreadyStte chng usko chk , yhn simple sa promise banao usmn resolve rjct hoga jaisy h resolve hoga mjhy ye prt mil jega ye h bsc cnsumption 

//meiny appsy kha th ye jo resolved h ye drctly cnnctd h hamary then k andr , to hr bt sto sto to krnga nh or console krwaonga , hoskta h network s koi data aaya ho wo data bhi pass krna prega wo seekhty hn , ab jo resolve lgaya usmein actually mn app pramtrs bhi pass krskty hn ziada tr jo appko data dikhega wo object pass hota hua dikhaidega resolve({}) chaho to arrr ya fun jo appka man kre 

const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName: 'chai', Email: 'chai@gmail.com'})
    }, 1000)
})

PromiseThree.then(function(user){ // es prt mn return hota , ab yhn upr wala data lnga kaisy ye intrstng bt atti h , dykhn jaisy h fun ko appny .then krlia resolve or eka cnnction h to app bydefault expect krskty ho to ab wo pura obj h to hm man lyty use hm user bula rhy to smply log kr k dykh lyty user mn kya ati 
    console.log(user);// data agya to ye bt to cmfrm k jb bhi appky pass es trhn ka syntx h hm jb consumption krty to resolve mn jo bhi h app paramtr pass krogy wo yhn mjhy mil jata h koi issue nh , ye to hogaya kaisy data  cnsmption hota value ati or ye sb ati 

})

// const PromiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){}, 1000) 
//     let error = true// yani error h , error base chkng p mn bolong resol hog ya rjct , ab suppose meiny webrequest ki , network rqt, file access ki to cndtionlchk lagadety 
//     if (!error){
//         resolve({userName: 'hitesh', password: '123'})
//     } else{
//         reject( "error: SOMETHIG WENT WRONG")
//     }
// })
// // ab kaisy consume krna es proms ko , etna to appko pata h .then laga k chzn lylnga or catch lga k lylnga agr error ahegi ab thora agy chlty h 1 step PromiseFour.then().catch(), appko pta h 1 fun dono mn decler krdnga , ab mn ata es then mn esmn mein expect kr rha k app mjhy user dogy or arrow fun laga lyta taky syntax smjh ahy , ab yhn meiry pass user aya ab mn appko callbckHell bata rha hn k clbkHell s kaisy avoid kia jata h or kaisy sirf 1 . then or .catch nh hota app jitny chaho .then laga skty hn , jb last time user meiny karwaya th to user mn mjhy username email pura obj h ml gaya th ab mn chhta pura userlyny ki need nh only userName , ab chaho to destructr kar k extract krskty hn pr hm yhn 1 lng senerio imagn kr rhy hn , usky liye hm console log (user ) user to meiry pass pura aarah lakin mn return kya kr rha hn return kar rhy user.userName to app eski furtherchaining krskty ho , es syntax ko achy s smjhlo ye database mn bht kaam ahega 
// PromiseFour.then((user) => {
// console.log(user);
// return user.userName
// }).then((userName)=>{
//     console.log(userName);

// }).catch(function(error){ //jo bhi val return hogi usy error bol lyty err jo bhi mn kry 
//     console.log(error);

// })

//oRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR nechy wala false h error

const PromiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){}, 1000) 
    let error = false// yani error nh h h , error base chkng p mn bolong resol hog ya rjct , ab suppose meiny webrequest ki , network rqt, file access ki to cndtionlchk lagadety
    if (!error){
        resolve({userName: 'hitesh', password: '123'})
    } else{
        reject( "error: SOMETHIG WENT WRONG")
    }
})
// ab kaisy consume krna es proms ko , etna to appko pata h .then laga k chzn lylnga or catch lga k lylnga agr error ahegi ab thora agy chlty h 1 step PromiseFour.then().catch(), appko pta h 1 fun dono mn decler krdnga , ab mn ata es then mn esmn mein expect kr rha k app mjhy user dogy or arrow fun laga lyta taky syntax smjh ahy , ab yhn meiry pass user aya ab mn appko callbckHell bata rha hn k clbkHell s kaisy avoid kia jata h or kaisy sirf 1 . then or .catch nh hota app jitny chaho .then laga skty hn , jb last time user meiny karwaya th to user mn mjhy username email pura obj h ml gaya th ab mn chhta pura userlyny ki need nh only userName , ab chaho to destructr kar k extract krskty hn pr hm yhn 1 lng senerio imagn kr rhy hn , usky liye hm console log (user ) user to meiry pass pura aarah lakin mn return kya kr rha hn return kar rhy user.userName to app eski furtherchaining krskty ho , es syntax ko achy s smjhlo ye database mn bht kaam ahega 
PromiseFour
.then((user) => {
console.log(user);
return user.userName
})
.then((userName)=>{
    console.log(userName);

}
).catch(function(error){ //jo bhi val return hogi usy error bol lyty err jo bhi mn kry 
    console.log(error);

}).finally(() => console.log('the promise either resolved or rejected')) //ye actually mn perfect tareeka h krny ka jb mjhy chainig krna hota to new line s prefare krta ye syntaxticall issue h readibility aati ab bht si aisi sitution jhn app finally use krogy error aya thk bt h , proms resolve hua thk bt h kahi br kya hota app mjhy batado end mn  appka jo bhi kam hona th wo hogaya kya  , finally hmesha hoga h hoga almost kindof default mn skty 31:00

//32:00 promiseFive

//1 dafa mn live class ly raha tha or us mn promise tha usy meiny async await s handle krdia ab wo bacha hogaya prshan ary proms kya h future mn hony wali 1 chz h to h or ye gurantee thori h k hmsha use .then or .catch s h hndle krogy nh nh aisa nh h , zrori nh k .thn or .ctch s karo specially ye topc bht discuss hota jb app database connection krty kuch log asyncawait prefere krty kuch .thn 
// const PromiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({userName: 'javaScript', password: '1234'})
//         } else {
//             reject('ERROR: js went wrong')
//         }
//     },1000)

// })
// async function consumePromiseFive(){
//    const response =  await PromiseFive  //promise 1 obj hai esy app es trhn consumed nh krty ho promiseFive()
//    console.log(response);
// }
// consumePromiseFive() //jb bhi hm ye fun execute krwahngy to hm dykhngy k error nh ahegi pehly aarae th q k appny us datta k andr us variable mn wo value ae nh thi or appny usy prnt krwany ki koshish ki thi q k appny 1 magical keyword esy dy rkha h async to wo error nh ahegi yhn p easily kam hojaega 


//async await kya hota exactly .thn .catch type s h thori dair wait krta h kam k hony ka jb wo hojata tb h agy brtha wrna whn error dydyta esmn hm gracefully catch hndle nh krty ye thora issue rhta but khi jaga zarroori hua database connction hua h nh to mjhy agy brhna h nh h , ab q k error true h to run kia error aya agr error false kia to phir sab badiya kr k dykh lyty , q  ye error ko hndle nh krta h to trycatch krty hn 

// const PromiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({userName: 'javaScript', password: '1234'})
//         } else {
//             reject('ERROR: js went wrong')
//         }
//     },1000)

// })
// async function consumePromiseFive(){
//    const response =  await PromiseFive  //promise 1 obj hai esy app es trhn consumed nh krty ho promiseFive()
//    console.log(response);
// }
// consumePromiseFive()


//async await ka 1 problm h k dirctly errors ko hndle nh krskty hn , trycatch krty hn 
// const PromiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({userName: 'javaScript', password: '1234'})
//         } else {
//             reject('ERROR: js went wrong')
//         }
//     },1000)

// })
// async function consumePromiseFive (){
//     try {
//        const response =  await PromiseFive
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// consumePromiseFive()
//oRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR

// async function getAllUsers(){
//     try {
//        const response = await fetch('https://jsonplaceholder.typicode.com/users')
//        const data =  await response.json()
//        console.log(data);
        
//     } catch (error) {
//         console.log('E:', error);
//     }
// }
// getAllUsers() //dumy data h ata actually mn ye to hua trycatch syntax

//ab .thn or ctch 
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
return response.json()  //ab appny return to krdia ab esko handle kon karega hn jee 1 or then ab mjhy pata h yhn value kya recv hogi jo uper waly thn n appko bheji thenable h na yhn p jo bhi uper wali value ae response boliye data boliye wapis s response boliye q k ye functionl scope h chalo data bol lyty , ab achi bt pata h kya h mjhy kahi bhi tryctch ki zaroort nh mjhy pata h ye theen khtm hoga to ye strt hoga ye sabsy achi bt h eski 
}).then((data) => {console.log(data);})
.catch((error) => console.log(error)

)
//fetch 1 bht h interestng feature h js mn ye browsr mn availble th lakn jaisy h nodejs mn fetch mn use krpaya khushi ka thkana nh th coz before tha req chlti thi xhr chalta thjaisy h fetch  natively nodejs mn aaya pura paradigm h chng hog kis trhn hm web rqt bhjngy aj koi usy nh dykhta lkn mn purana appko ly k chln or detail mn hm jhn , intrnt eexplolr 5 s hamain mili http/xml/xhr request to 1 fetcchapi ae wo xml k through h ae , kam xml s bh ihorha th but etny sary status ko trck krna usky bad callbackhell appny ap mn 1 issue th asynchronous banana 1 isue th to usky bad 1 library ae choti si fetch api, app xml k 1 trn s successer ho , q node mn include nh kia th 2 reson s 1 to web p bht ziada heavily dependent th , sara kam browser available hoga to h hoga ab node js mn kya h usm browser availb nh h hamara to engn th wo to hmny nikal lia h to browser ki apis jo h wo to nh h availble , abott controller hota h jb apki node request gae hui h fetch k through to usy app rok bhi skty browser k andr appko full cntrl h , to unhn ny khud strem api likhi to sara to sara ka sara browser core syntax kam th wo khud likha or phr include kia . 
//fetch kya h global fetch method h jo process start karna kisi bhi process h network k uper or promise return krta h , or promise agr il gaya ya to resolv ya rjct hoga , promise s appny req ki or whn s erorcode agaya 404 wo appko resolv mn mile g ya rjct m , wo hmsha appko as a response h milega wo error hoga us case mn jb wo req kar h nh paya sirf us case mn error milta baqi network req ko nh pata appky error apka status to bas mdn p prh ln interestng para h ye interview mn puchty , 
//aksr log cnfused hoty k chalo fetch requ to mn krdnga lakinmjhy or bhi chzn bhejni pari userIdPasswrd ya or koi post data bhejna para wo prblm es liye k unhn ny kbhi bhi aa k detail mn docmntation parhi h nh 
//diagram  memory jog krwadn ye th js engn yhn memory or ye callstack or kch h bhi nh js engin mn jo bhi fun aaty global hmary pass bottom p rkha h hota h global executino context usky uper hm funtionl executionl context rkhty jaaty h top s execute krty jaty koi or fun  mn fun agaaya usko wapis s rkh dyty usy execute krwaty phly , kch fun hoty special type k wo kya krty wo kuch requ krdyty call ko or 1 sto ko karaty to sto 1 rgstr callbck ko rgstr kr k rkh lyta or appky pass 1 yhn taskque nam ki 1 chz hoti or us tsk que us task q mn appky sary calbck ko rkhta jata h or jaisy h execution time ata h automtically 1 evnt loop hota ye jo k cntinsly chk krta rhta meri tsk q bhari to nh or callskck khali to nh h or agr tsk que ko krny ka time hogaya 2sec 3sec to yhn s yhn nikl lijiye jo kam krna th kariye neechy s globl s nae jata top s h jaega , app i memory jog krain jo fetch kam kra rha h wo pehly horaha h or baqi ka ka bad mn horha set time out tk bad mn aaraha h to ye jo q hain na ye special q h or ye bnti fetch k liye , fetch ki que ka nam h micro task que or bhi bht nam h default ye h , priority or fetct q bhi khty , sab h kahani k hero hn , fetch s jo bhi kam hota h wo callbck q mn aata h q k ye proms q h to eski priorty high hoti h to ye vip line jaati h or call stack mn sabsy phly add hoti h 


//response = fetch ('something , {})  // fetch mn , laga k objcts bhi dal skta . fetch ka internal mechansm jo kam krta wo 2 part mn dvd hota /kam hota 
//data;-

// 1 part jata h browser, node ya web ki api handle krny , or 1 part appkya  variables or memories mein data ka space reserve krny to 2 jany bhgty hn fatafat 
//pehly waala jata memory mn space reserve karta DATA uska nam exctly data nh hota h jo nam bolna chaho hitesh chai kch bhi 
//dATA;- references mn specification mn nam chng hoty ahy hn sab jaga alg alg name hai on fulfil or onrejection k 
//onfulfill[]    //ye appka promise ka resolution h onfulfill, appny sae pehchana 'resolve
//on rejection[]   // ye ARR hoty hn en mn appko drctly value push krna allow nh h ye appki rang mn h nh hoty app enhn access nh krskty ye private field mn hoty hn yhn tk k data bhi privateField h hota h 


//WEB BROWSER/ NODE -> network request 
//2sra appka jo kam krta mr green ye ya to web browser api hndle krega ya phir nodebase  ab jati yhn s networkrequest ye direct app sendfire nh krskty appko koi n koi resource chahye hota h ya to brow resor derha ya nodeenvirmnt, network req p ya to jaega data ya nh jaega agr ja k rspnse aya h to wo hmesha jata onfulfled mn ya phr resolve mn , agr req ja h nh parae ya koi response h nh aaraha to rejection yadd rakhain apppky jitny bhi errors h 404 tk bhi file not found netwrk p req gae tb h to appko pata laga k error aya to ye onfulfilled mn h count hoga ye hui senior dvlpmnt wali bt
// ye jo data h na ye memory mn appky pass reserve rhta h , ab ye initially data ki value hoti empty undefined to nh bolskty chalain undefined h man lyty , jb appka kam hojaega networkrequ s to ya to onfulfil fire hoga ya onreject fire hoga , es mn hoty hn fun or ye fun responsble h data ko fulfil krny mn ,  data mn memory jo bani h whn s value hoti h fulfil1 1 br data n jaisy h value fulfil krdi to hmny kya variable bnaya response hamara variable global mwemory  mn available h to data ki responsibility h k jaa k us response ko fulfil krain 






