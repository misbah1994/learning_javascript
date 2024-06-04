// kis trhn code execute hoga or jo call stack hn wo kis trhn execute hoty to bas etni h kahani h, esky bad to if else fun loop jo lagana lagaiye bs etni h kahani h 1st topic hai EXECUTION CONTEXT j.s mein k ye pura code h esy kistrhn execute kia jata h , two part mn devide kia jata esy. 
//2nd hota callStack yani appky pass 1 memory h us memory mn kaisy fun jahngy, kaisy execute hngy or kaisy ussy bhr ahaingy esko pata krny k liye hm browser mn dykhaingy, appko sikhonga k app browser mn kaisy appni js file add karskty or whn visualize kar k dykh skty k kaisy callStack etc use horaha h, appko koi diagram ki zaroort nae hogi qk wahn ankhn k samny dykhng

// JAVASCRIPT EXECUTION CONTEXT! appny jo bhi file banae h js usy execute kaisy karegi run kaisy karegi, js appky progrm ko 2 phase mn run karegi
// jb bhi app js ko koi code dyty hn to ye hamara code h {} => ye hmny j.s ko di hai to sbsy pehly to ye to banega h banega global execution context, usko refer kardia jata 1 variable this, this variable mn us global execution context ko rkh dia jata, {} => global EC

// for interview, agr appny browser mn run kia to browser ka jo execution context hota wo thora s alag hota h, node ka alag hota h to browser ka ziada importnt hota to usmein this ki value window aati h, agy app react code prhngy to kahi br react code kaam nae kr raha hota to appny server side p render kardia hota or wahn appky pass es window object ka to access h he nae, to etna yaad rakhin k GLOBAL EXECUTION CONTEXT TO hoga ab value h this ki ya nae wo alg bt h to ab ye kya hota ye thread mn execute hota h, kaisy single thread p kam karty ye sb detail hm agy janaingy. j.s 1 single threaded hai ye appko pata hona chahye, esmein hr cheez 1 process hoti , kis trhn kam kart mn appko basic dikhata
//1, GLOBAL EXECUTION CONTEXT
//2, FUNCTION YA FUNCTIONAAL EXECUTION CONTEXT // usually ye 2 he hoty
//3, EVAL EXECUTION CONTEXT // kuch documentatin app agy parhngy jaisy mongo etc , ye eval appny app mn 1 property hota global object ki
// ab  ye hua hamara j.s ka box jismein code rakha , ab 2 phases mn ye actually run hota h1st hai MEMORY CREATION PHASE OR memory phase or 2nd hai EXECUTION PHASE, dono ka difference hai k memory phase mn jo bhi appny variavble declare kia usi jaga allocate hoti h, unhn execute nae kia jata, ho bhi appny mathematical fun jo bhi likha +, - wo sara kam execution mn hota, sirf memory allocation phase hota memory creation phase k andar, ///now values kaisy rakhi jaati kya defie hoti example
//{} = > 1) memory creation phase
     //  2) execution phase
     
     let val1 = 10
     let val2 = 5
     function addNum(num1, num2){
        let total = num1 + num2
        return total

     }
     let result1 = addNum(val1, val2)
     let result2 = addNum(10, 2) //ab ye code kaisy execute hoga j.s mn agr app ye kisi ko bhi smjha skty to appko j.s achy s aata


     //ab sbsy pehly koi bhi code run karna ho wo global execution s run hoga or esko sbsy pehly allocate kia jata THIS k andr, ye to hona h hai to ye hogaya hamara basic global execution context.
     //1) global executin=>this  //globl environment bhi bolty
     //2) memory phase  mcp or cp//esmein kya hota sary variable ko ekhtta kia jata, or un sbko bas rakha jata appny pass

     // memory phase mn sabsy pehly sary variable k nam likhy jaty or esmein likha jata undefied
     //2) mEMORY PHASE; 
     // val1 => undefined
     // val2 => undefined
     // addnum => definition  //ye jo function meintha wo pura def phase mn gaya
     // result1 => undefined
     // result2 => undefined
     // ye hai first cycle ye to hoga h hoga 
     //3rd) execution phase
     //  value1 => 10
    //   value2 => 5
    //   addnum => BOX[new variable environment + execution thread] =>memory phase , val1 = undefined, val2 = undefined, total = undefined.esko result s mt dykhiyega k yhn s exeute karna blky to ye executional context jo tiyr hua h ye fun k bad jo addnum h usky liye hua.
    // now execution context , ab yhn processing hoti ya execution hota jo bhi mathemtical expression h. num1 = 10, num2 = 5 , total = 15 , ab ye return bhi to hoga to ye global execution context mn return hojaega, ye new executional context create jb hota to ye delete bhi hojata h yaad rkhny ki bt ab hamary pass jo ye, 3) p execution phase h espy value aagae, result1 = 15, ab result2 mein bhi fun aagaya hai wapis p kahani repeat hogi woi box[nve +  thread milega appko] thread p h to sara execution hota j.s ka, ab esky bhi wapis s 2 phase ahaingy, memory phase or execution phase baqi sara woi again, suumary yhn hmny dykha 2 fun execute huey, usky liye new execution envrnmnt sangbox create hua, environmnt variables bany whn hmn thread bhi mil gaya, kaam bhi hogaya.


    // call stack

   // sabsy pehly globl execution to hoga h hoga, appky fun jaisy jaisy aty jaty wo ussy htty jaty ab ye one() esy app andar ly k jaty jaisy kam hota hata dyty, kabhi appny 1 fun mn dosra rkha hota tbhi ye kaisy kaam karta, complexity ati jb app ny one() ko andr rakha or two() ko andr call karlia or appny three() ko bhi andr rkh lia to ab yhn lifo naam ka concept chlta last in first out.
   // ab 3 h bhr jaega ab google chrome p exercise dykhty











    //   addnum uper jo fun k bad mn h, usmein kch bhi nae hoga q k wahn execution karny k liye kuch h nae, q k eski def appny already hold kar k rkhdi memory phase mn
    // ab result1 mn to jana tha addnum, ab addnum to fun hai, ab ye addnum apna alag 1 execution context banata h, jitni br ye fun execute hoty utni br appky liye new box create hota, esy khty new executional context , or es context mn variable ka enviromnt ka alag s signbox banaya jata, 1 executon thread bhi appky liye banaya jata h jissy appky sary kam or execution jo hona h, interesting cheez ye h k q k appky liye pura signbox tiyr hogaya h to ab ye dono kaam dobara s hngy, memory phase or execution phase , or ye kisky liye execute hoga addNum k liye, utni br jitni br app fun likhty, q k global to hogaya 1 br, ab jitni br appky pass fun ahaingy utni br appko 1 signbox banana usky andr memoryphase bhi karna or execution phase bhi krna


