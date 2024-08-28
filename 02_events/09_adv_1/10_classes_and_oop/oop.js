// objct literall
// const user = {

// }  ye appka literally 1 object hai j.s mn esi ko h base unit bola gaya h appka jo objct h woi base unit bola gya h or yae sbsy base unt h jaisy whn classes hoti h to esmn kr kya kya skty h 

// const user = {
//     userName: "hitesh",
//     logginCount: 8,
//     signOut: true

// }  //ab esy print krwana to 2 tareeky batahn thy square brckt or .notation 
// console.log(user.userName); // ab objLiterall app es trhn s banaty ho to meiny appko kha k obj mn properties or methds hoty hn , ye sari property h jaisy arr mn di jati property .lenght, arr mn .map etc wo fun bhi diye ghy hn taky wo kch kam bhi krlain to wo kam bhi hmn yhn diye jaty forexample nechy dykhain getUserDetails

// const user = {
//     userName: "hitesh",
//     logginCount: 8,
//     signOut: true,
//     getUserDetails: function(){  //return bhi krwaskty khair console log h krwalyty 
        // console.log('got user details from database'); man lijiye es console log ki jaga appko kch details prnt karwani thi suppose appko console log h krna th lkn backticks mn or mjhy usernam dena tha 

        // console.log(`username: ${userName}`);  // ab app yhndrctly userName likh dty print kia to usny kha userName not defined usy pata h nh k konsy username ki bt kr rhy ho , jb js k engine mn memory mn rkha gaya to fun ki details to lyli lakn usy pata h nh uservariable kya h fun mn bhi to execution cntxt h wo bana th appny usy bola h nh k bhr s bhi saman lao , to jb bhr s saman lyna prta to usy  execution contxt batana prhta k mein appny saman ki bt kr rha 

        // console.log(`username: ${this.userName}`);  //print kia to username: hitesh
        
        // console.log(this); //ye intrstng h yhn kya ahega ary crnt cntxt ye rha object ye rhy crnt cntxt , jitna hamary pass memory mn value th wo sath rkha gaya or usy sb k bary mmn pata h ., ab agr mn globl mn krwao 
        
        

    // }

// }   
// console.log(user.userName);
// console.log(user.getUserDetails());  //run krwana parega sirf reference nh dyskty 
// undefined bhi aya bd mn discuss krngy 
//ab hm console mn jaty or myArr kart to obvious myArr k sath properties attached hoti h kch or methods bhi assign hoty hn, mthd jo h jaisy wo map hai to map ko kaisy pata k mjhy 1,2,3 p h loop krna h 
// let myArray = [1, 2, 3]
// let myArray = [1, 2, 3, 4, 5, 6]
// 2 arr h to kaisy pata lagao k mn currnt context ki bt kr rha ho , current cntxt means current chezon ki bt kr rha ab dykhain monday monday hota h , last week ka monday alg comng ka alg to appko context batana hoga to exactly whn this keyword kam aata h 

// console.log(this); // to empty paranthesis yani abhi globl cntxt mn kuch nh h lkin ye globl cntxt chng hota h q k hm browser s nikal k lahy hn chng hota rhta h q k browser mn bht si apis , fetch h dom h browserreq h , jb app browser mn krogy  to already lock mn bht sara cntxt hota h to whn this to whn wndow object milta h jo k globl objct h , or usmn 50 chzn hoti to browser mn this ka val current contxt mn globl contxt mn bht si chzn rkhi hui h but node mn kam h 
//ab mjhy agr user2 banana h to usmein alg value dalegi to hr bar banana possible nh h , suppose karain mn 1 structure bana rha th database mn dalny k liye userNae, logi sign ye sb , methd chalain nh dalta ho to hr br etna sara kam krna prega to us kam ko rokny k liye actully mn hamary pass cnstructor fun  or ye sab aty  abhi hmny sirf objliterall ki bt ki , ab bt krty constructor fun ki 

// const user2 = {
//     userName: "hitesh",
//     logginCount: 8,
//     signOut: true,
//     getUserDetails: function(){
    
//             console.log(this);
            
//         }
//     }



// const promiseOne = new Promise() 
// const date = new Date() //ye nnew word aya khn s or kya kam kr rha h or sirf ye nh appky pass or bhi exmples hn ye actually mn new kyawrd jo h ye constructorFun hai , ye constrctrFun appko allow krta h k app 1 h object literall s app multiple instance banalo dykhn agr 1 instance hoga to im happy k memory mn ziada jaga nh jaraw h sara kam horha h but may situatim like proms date whn hmn new instnce h chahye purani vlues kko effct na kro this  etc jo bhi bol rhy ho to apna cntxt rkho , to new jo h naya cntxt banany k liyee kam aata h esi ko cnstrctr fun kehty , suppose app 1 fun bana rhy ab es fun ka nam h user , ab agr fun user banahy to obvious k 1 h br run hota h 1 hglobl execution cntxt hota h whn hojata , suppse us user fun mn meiny kha k app mjhy userName do or lgncount or islogged in , ab meiny kha en value ko name mn set kerna to already meiry pass variable h username ,usmn assign krdo uper wala userName 

// function user(username, logginCount, isLoggedIn){
    // username = username}// ab bathngy kaisy k meri andr ki val konsi h or app kya derhy ho to wapis s this.username
// ab hmn nh pata ye app jo mjhy pass kr rhy ye konsa h kismn konsa h 
// myuserName = username // agr mny myusername kia to easily pata lg gaya k ye my wala variiable h or right wala uper jo parameter pass hua uski value h arguemnt h but aksr practc mn dono k nam same rkhty hn but batahn gy kaisy meiry andr k konsy variabl or app konse dy rhy ho 
//// left wali variable or right wali jo app pass kr k derhy ho, app chho to variable name alg likh do phir bhi this ka cncpt to ahega , this kya h obj hai or objct mn valu daly jrhy hn abhi appny dykha na this kya h blnk obj h to hai ab esmn jo dal ln 


// function user(username, logginCount, isLoggedIn){
//    this.username = username 
//    this.logginCount = logginCount
//    this.isLoggedIn = isLoggedIn

//    return this // ap chaho to return this krskty ho obj tha na this appny pass on krdia ab jo bhi khelyga esky sath wo aram s es puri val ko access krskta h 
   
// }

// const userOne = user('hitesh', 12, true)
// const userOne = new user('hitesh', 12, true)

// const userTwo= user('chai aur code', 11, false)
// const userTwo=  new user('chai aur code', 11, false)  //hmny kch obj nh likha class nh likhi hm sirf new keywrd ka importnt jan rhy or new kywrd ki waja s faltu ka mess bhi nh aaraha h 
// console.log(userOne); 
// console.log(userTwo);

 //q k return this kia th to fetch or values milegi bht si es sb ko ignore kro or bas username, logincount or isloggedin p jaty , acha log mn jo userone lia to . s property access bhi krskta. problm kb ati meiny bola const userTwo 
//ab wapis s hm userOne ki value print krwaty to usny to overwrite krdi , userTwo to appny kbhi prnt  h nh krwaya to userTwo n kya kia overwrite krdi , to ye to pura ka pura code h hmari bend baja dega agr aisy hua to , esi liye mein br br new keywrd promises mn use kr rha th to cntructr fun hr br appko 1 new instance 1 copy dedeta h jo app khelogy wo appky hawaly h jo likh rhy wo bhi ab krna kya h new kywrd use krlena h , suppose krn agr mn return this nh krta to kya hoga value milti nh milti to milti h to by default hota app likho nh likho to by default h 26;57
// mein hmsha blv krta verbox code likho javascrit jitna nh bas etna k appko pata ho k app kya kr rhy ho, 
//jaisy h app new kywrd use krogy to absy pehly 1 empty obj create hota h jisko instance kaha jata jaisy this k case mn empty paranthesis aaya , khair to new obj appky pass create hua step1
//step2 costructor fun call hota h new kywrd k karan ye appky sary argumnt usmn pack krta h appko dedeta h 
//3rd step mn jo appka this keywrd h to jo bhi appny argumnt likhn h wo sb usmn inject hojaty hn or 4th mn appko mil jaty , phly obj create hua phir jo likha h wo pass hua usmn khair, ab ye to hua ab yee hmny sari properties h likhi h aisa nh k appko koi rok rha app methd bh likh skty h 

// function user(username, logginCount, isLoggedIn){
//     this.username = username 
//     this.logginCount = logginCount
//     this.isLoggedIn = isLoggedIn
//     this.greeting = function(){   ab ye to hua ab yee hmny sari properties h likhi h aisa nh k appko koi rok rha app methd bh likh skty h
//         console.log(`welcom ${this.username}`); 
        
//     }
 
//     return this 
    
//  }
//  const userOne = new user('hitesh', 12, true)
//  console.log(userOne);
////oRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRr //constructor property

function user(username, logginCount, isLoggedIn){
    this.username = username 
    this.logginCount = logginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`welcom ${this.username}`);
        
    }
 
    return this 
    
 }
 const userOne = new user('hitesh', 12, true)
 console.log(userOne.constructor);  //[Function: user] ye aya to cntrctor proprty hoti kya h kuch nh hoti reference hoti h appky khudi k bry mn , yae basiclly cnstrctr hota h , 1 mthd hota h intance of js mdn p  k car banae uska make model year rkha , khaiir

// lecture prototypw
const newHero = ['hulk', 'spiderman']
newHero


//  in this video we talk js beghaivir called prototypel bhvr , //jaisy h kia undefined to hmny return nh kia declare hogaya memory mn space chali gae ab jaisy h nerHero likha to conslebro mjhy kuch new information bhi deta h to 0th position mn huld or 1th p spidermn or lenght h 2 elemnts or phr prototype name ki chz h , js kka jo 1 default behvr h wo h prototypal bhvr uper s uper, js har nh mnati or usky uper s layer p ja k dykhti or dykhti to prnt ko grndparnt ko acces krti or grnd grnd , hr nh mnti jb tk usy null value na ml jae , es bhvr s linked ho k appka jo this keywrd h wo bhi kam krta ,kahi log khty arrow fun mn hamary pass this ka acces nh hota wo esi liye k ye prototyp whn ajata , abhi k liye etna jan ln k prototyp h wo h jo appko new keywrd ka acces dyrha ya wrkng mili hclasses appko mili h es k throuhg h mili h or appka this bhi esi k throgh kam kr rha or jo appka prototype inheritance h wo bhi esi k throgh, esy khud s nh pata to ye pchny mn nh ghbrati , prototypal inheritnce mtlb yhn nh mila or upr or uper, ab or open kia to getter or setter ml rhy or nh mil rha 
