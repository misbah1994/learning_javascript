# project related to Dom

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1
```javascript
console.log('hitesh')
const button = querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id === "grey"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "white"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "blue"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "yellow"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "purple"){
      body.style.backgroundColor = e.target.id
    }
  });
});

```

<!-- <!-- lets build 4 projects lecture 35 
    ********** -->

<!-- bina events k dom k project karna mumkin h nh h, codeSadBox website h yhn app j.s  etc k templates bana skty taky log usko browser mn h practice krlain, phir app browser mn h pura code likh lo, yhn kuch problems ahy, although platform acha hai, lakn mein ly k jata esy stackblitz p, ab q k meiny account bnaya h or create kia if mein changes krnga  to changes save hojaegi, incognito mn paste krskty but right hnd side ka preview nh milega to app regular browser mn h open kro, mein loggedIn hn to mn safari p kholnga app khn bhi kholo, stackblitz mn if you want to change and want to save to fork p click krdo but appko stackblitz p account bnana parega, without signin you cant save it,
ab ye link milega appko markdown file s , now we create folder 01_projects now file projectSet1.md . markDown mn uper 1 button hota chota wo preview open krta m.d k liye. # laga k likhty  -->

 <!-- // sabsy phly elemnts ko select krna hoga sary buttons ko then body ko , 2 elmnts hn body or button. document body bhi slct krskty ya phir documnt.queryslctr body. button ko app chaho to class s slct karo ya id s slct kr k 1,1 btn ko hold kariye better ye hoga k mn ensbko sth slct krlo  q k bd mn loop laga skn -->
<!-- const buttons = document.querySelectorAll('.button'); -->
<!-- const body = document.querySelector('body'); -->
<!-- // direct tagname dia h body, browser mn bht sary event hoty hn cursor ko move bh event h, es tab ko close krna bhi 1 event h, click bhi evnt h, abhi goal h k jb bhi app event click krty us event ko app fun mn ly skty orusky sth kuch activity krskty -->
<!-- //q k nodelist mili h , html collction nh to esky sth mn forEach laga skta hn, q k forEach loop h to hr 1 button milega appko to usy bola button or log krwaya to button mn kya mila to span h ye or sara attribute mil gaya sary elmnt mil gahy. ab hm hr button p eventlistner lghngy, event hoty hn lkn koi usy sunny wala bhi chahye, mjhy click event suuna , jb bhi event hota h to usy appny sth mn carry krna hota h, evnt object h usmein bht sari details hoti h abhi app usko e nam dedo detail tell you soon. e dedo event dedo wo hai actually event ka object naam kuch bhi dedo, variable name s nh ghabrana. -->

<!-- // event.trgt likhty h appko pata chl jata ye aa khn s raha h, evnt.trgt h to .id s id nikal skta hn grey , yllow jo b ml jega , ab app ifelse lagao switchcase lagao. mn if s. app chaho to bckgrd color mein hardcode value bhi likh skty mtlb grey  , ya phir agr appko or achi programing practice krni to e.targt.id bhi likh skty -->
 
 ## project 2 solution

 ```javascript
const form = document.querySelector('form')
form.addEventListener('submit', function(e){
e.preventDefault()

const height = parseInt(document.querySelector('#height').value)

const weight = parseInt(document.querySelector('#weight').value)

const results = document.querySelector('#results')
if(height === '' || height < 0 ||isNaN(height)){
  results.innerHTML = `please give a valid height ${height}`;
} else if(weight === '' || weight < 0 ||isNaN(weight)){
  results.innerHTML = `please give a valid weight ${weight}`;
} else {
   const bmi = (weight / ((height*height)/1000)).toFixed(2)
   //show the result
   results.innerHTML = `<span>${bmi}</span>`
}

})
''

// height === "" height empty nh honi chahye, or 2sri condtin agr 0 s km deraha to mn nh chahte height<0 , or  agr numbr h nh h
//yhn purani technique h height != NaN, new 1 which is recommended in documentation , isNan height , agr wo number mn convertble hogi to true , results.innerHTML = `please give a valid height ${height}`;
// results mein innerhtml add kia , innerhtml ko es br  backticks ly k span mn add kia agy kaam ahega , agy projct h. bmi inject k 
// form jb bhi submit hota h post or get type s . jb bhi submt hota to uski value server p ya url p chali jati, to jo bhi default h usy yhn roklo, evt p h method milta h. hr br jb form k andr event ahy tb un values ko slct kry , kuch log yhn krlyty (31:00) ab #height.value s jo value ahegi wo string mn ahegi , string s int mn pass krny kliye wrap karo or parseInt abb jo value ahegi wo int mn
 ```
<!-- jb bhi app event lyty usy fun mn lyskty or kvh activity krskty   -->


## project 3 solution code 
```javascript
const clock = document.getElementById("clock")
// const clock = document.querySelector('#clock')
setInterval(function(){
  let date = new Date()
// console.log(date.toLocaleTimeString)
clock.innerHTML = date.toLocaleTimeString()
}, 1000)


//clock display krwani digital clock h hr sec p chng honi, let date kar k , console karny s to console mn aya lakn yhn nh aya , jtni br pge refrsh hoga time ahega lkn mn chahta mn hr br karn, to kaisy krn kch log extra intellignt k chronejob lagado ary abhi etna advn phnch gahy app, soi k bry mn bt horae app appni tlwr nikal rhy , to appky jo evnt cntrl karta h wo hai appka mthd setinterval, app koi bhi mthd dedain or batahn kity time bd continsly run krn , to 2 parameter h function or uski body or dsra time parameter milisecnd mn hota 1000 1 sec, lijiye 2000 , mjhy consl mn nh chalana time mjh docmnt update krna th node update krna th hr scnd mn to innerhtml



```
## project 4

<!-- //white mn appko 1 nmber entr krna submit jaisy krogy wo evaluate hoga, appko chk krna num thk h ya nh to random numbr bhi genert krna hoga, or previous guesses to hm kya kr rah 1 array bana rhy , jo previous guesses diye wo hm 1 array mn store krty jhngyuser ko display kraty jhngy or sath mn jo remainng guesses h usy bhi lower down krna, 9 attempt reh gahy 4 rh gahy es trhn, innerhtml mn hmry pss form h or neechy result, form mn 1 to meiry pass guess fld , phr input h whn s mn vlu nkal skta then input type submit ab jo input typ sbmt h actually mn ye button h form k andr zarori nh button ko h typ submit likho app input ko bhi type submit likh skty aisy scenerios aty, loworhigh mn hm batahgy k lw h vlu ya high, agr user n appny sary guesses ly liye to usy prevos or remaining nhdikhhngy bolaingy seedha start over karo 
// kch valu hm insrt krngy to 1 pragrph lylyty hain phr m batta konsi strategy folow kr rhy, ab strategy ki bt sbsy phly hamain prevguess ye hai 1 arr q k esmein , jo bhi userv submit krega value us value ko hm stoe krlaingy or es pury arr ko h user ko dkhadngy taky user ko pata h k atleast jo same guess value h usy again na kare, next kitny attempt lychuka, phr  numGuesse to strt 1 s or 10 p jata to lock krdety disabled , then 1 variable lyty playgame to jb bhi app game etc design karn to hamesha es trh ka variable to hota h h playGame allow krta khelny k liye suppose appky evnt khtm hogahy coin khtm hogahy to es cnditn ko chk kiye baghair kuch bhi agy nh barta, ab tk cheezon ko collect kia or prepare ab tk koi logc nh likha
// ab likhty hm fun  thory s  phla fun validateGuess, ek guess do mn usy validate krdnga yeesliye qk mjhy dykhna h k usny 1 validae num guess kia ya nh ABC dedia to kya hoga phr dykhna k value 1 se less to nh deraha , neg to nh deraha  100 s uper to nh to ye sara validate ka kaam yhn hoga ye kam hua es method mn , phr ahega checkGuess ab chk guess mn bhi appko gueess dalna hoga ab app bology validate to hogaya ,validation mila h  value uper h nchy, hmny usy koi mesg print nh krwaya to hm mssg prnt krwahngy k appka guess vlu corrct h low h ya high ye kaam chk mn hoga validtion or chk same h app koi or naam deskty ab mn display messge ka alg s fun bana rha app chacho to sth banalo  ya appna guess pass krdo  ye methd seedha Dom s interact krega,bht easy h user ki jo input value h usy wps s empty krdaingy, usy nxt guess krna  or innerhtml mn guess ko add kardaingy or numbers ko kam krdngy  to dom k sth jo  mn jo manipulaton h wo displaymesg mn krdaingy

// chckguess mn khn wo valu rndmNumber k equal to nh or agr h to es displaymessage ka use kr  batega k app gme jeet gahy ho game , agr low h to low h high h to high h, display guess m apki value ko clean krega, q k next value input krni same value nh lyni usky elawa jo guess h arrays h usy bhi update krega, guess remainng ko bhi update krega, , validate messge 1 s 100 k bech mn vlu h k nh, displayMessge mn  ziada kch nh ye jo low or high lia h queryslctr esmn hm messg pass krngy wo messg exatise print kraingy  ab hamain 1 mtd chahye game ko end bhi krna or strt bhi  -->


## project 5 
``` javaScript
console.log('Project 5');
//jaisy h m key press krn yhn hamary pass 1 key value aajhn , index file mn tble ki stylng dy rakhi h , yhn 1 div h insrt eska rfrnc lyln jaisy h kch ho esmn html add krdain jo bhi h wo key press wo dkh jae, ye sara asynchronous code ka part h q k hmara koi main event ya thread block nh horha h , jtna bhi apka settimeout setinterval clear time out ye sb basically asynchronous ka part h , zaroori nh asynchronous ka mtlb hmsha web p h requesrt bhjo interviwe mn kafi log fail hoty , asynchronous javascr mn khud k ander bhi din h lkn aisa nh k js bydefalt asynchro usy bnana prta kch apis ka use kr k , esi liye google p dykhta k asynchr programg h , hai q k apis sath mn arae h usky esi liye asynch request mar paty warna keyword h nh hota but wo jo default engne hai wo nh hai but complt jo run time envrnmt hai wo allow krta 1 h thread p chlta sochain kya kamal horaha 
const insert = document.getElementById('insert');
//puri wndw p h mjhy addevntlstner add krna
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class= 'color'>
  <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === '' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  </table>

  </div> 
  `;
}); //e esmn bht si vlu hoti h ab es div mn mny html elmnt lia h khn s bhi tble ly ahy w3 school ya mdn, <td>${e.key === '' ? 'space': e.key}</td> ye sir n karwaya jb space kr rhy to empty araha th to manually likha but mera workng not


```

## project 6 
``` javascript
//strt krty h 1 bckgrd color ajana chahye or continuosly hr sec p bckgrd color chng hona chahye jaisy h stop to wo jaisa h waisy h hojae , to set interval use krna hoga q k hr tme p kch krna h , chalo butn p to addentlstner or set intevl laga daingy but ye rndm color kaisy gnrate or hex code mn , 
//generate a random color , rndmclr generte hoga hex value s 
const randomColor = function(){
  const hex = '0123456789ABCDEF'
  let color = '#' //let kia wrna chng nh karpaty
  for(let i = 0; i<6; i++){ //6 dgt ka horha genete hr dafa 
    color += hex[Math.floor(Math.random() * 16)]


  }
return color
}
let intervalId; //global mein declare kia q k khi jaga use karaingy
const  startChangingColor = function(){
  if(!intervalId){
    intervalId = setInterval(changeBgClr , 1000)
  }
  function changeBgClr() {document.body.style.backgroundColor = randomColor()}
}
const  stopChangingColor = function(){
  clearInterval(intervalId)
  intervalId = null

}
document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)


// ye jo intervalIdh esy app br br ovrwrt kr rhy h , khi cases mn app chahty or clear code likhn jaisy h appny clearInterval(intervalId)kia ab usy flushout krdo ab esy null kardo , code acha hogaya professionalism ad hogaya, mera stop wrk kr rha after settng null proprty but sir ka nh sir n kaha k achi practice h agr mn if(!intervalId){
    // intervalId = setInterval(changeBgClr , 1000)
  // } if s mera wrk nh kar rha 

```