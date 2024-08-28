// /js mn appny call, bind , apply ziada suna hoga , jb strtng mn reactaya th react 1 usmn bind bhtuse hota t, to hm call or bind bht use krty thy q k library etna dfn h nh thi , etna syntactic sugr th h nh , ab nh lagana prta lang and framewrk libraries evolv hogae h , meiny btaya th k hmry pass 1 callsktck hota h whn sab execute hota , 1 globl exection contxt hota jo k hmesha rehta, phr 1 fun aya to uska cntxt ajata phir 1 or fun aya to uska cntxt upr ajata, jaisy h fun hata uska cntxt whn s hat jata h , to jb bhi 1 fun upr ata to waps s pura execution cntxt ly k aata h , memry ly k ata callstack lata to wo hmesha h hoga to usmn kuch default properties jaisy global cntxt mn dykhty appky pass kch browser api or rqt to kafi chzn hoti hr fun execution cntxt mn 
//window = {this = window}
// node = {} globl mn, 
// cmptr mn screenshot h eska


// suppose app discord banarhy discord mn username chk krny k liye app kch rules bhi chk krty ho , database s bhi call ly kr aty ho k kisi orv n kch ly to h rkha h 
// function setUsername(username){
//     //complex DB calls
//     this.username = username
// console.log('called');

// }
// function createUser(username, email, password){
//     setUsername(username)

//     this.email = email
//     this.password = password

// }
// const chai = new createUser('chai', 'chai@google.com','123')
// console.log(chai); //email or passwrd agaya username nh ya, to ye setusername ka access to mil nh rha to ye call nh horha mana k deceiving h setUsername(username) parnthesis ki wahja s cnsolLog called s call to horhha lkn technicly wo kam nh horha, to called s execute ho k ghyb horha to sary variable bhi ghayab

//  to refrnc hold kr k rkhna h na k usmn jo bhi vrbl declare horhay ya jo bhi fun call horha hn to jo bhi exectin horha ussy jo value return horhe wo bhi to chahye na , aisy thori na k executin cntxt hat gaya bt khtm , to executin cntxt appko whn dena parega to appko .call dena prega wo call hoga lkn appko koi chng nh milega termnl p , to ussko rrefrnce dena hoga k jo app set kr rhy ho ye khud k this mn nh kro q k mjhy pata h hr fun ka appny app mn 1 this hota h to mjhy pata h k ye appka this ghyb hojaega , mein appko apna this deta ho rfrnce, this kya h 1 object h to h globl 

 
//.call laga k 
function setUsername(username){
    //complex DB calls
    this.username = username
    
    

}
function createUser(username, email, password){
    setUsername.call(this, username) 
    // mein appko apna this deta ho rfrnce, this kya h 1 object h to h globl 

    this.email = email
    this.password = password

}
const chai = new createUser('chai', 'chai@google.com','123')
console.log(chai); 

//koi appsy pchy k call kya h to app rata rataya nh bology k call hamara curnt execution cntxt kisi or fun ko pass krdeta h , tchniclly app thk ho , lkn ye pura smjhaogy to konsa interview nh nikalny wala apka 