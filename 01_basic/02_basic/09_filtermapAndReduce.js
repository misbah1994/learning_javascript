//woi appny item mn lock kia kya ho agr mn esy 1 variable mn store krna chahn to,ab kya hoga, ab bt ye ati k ye for each loop value ko return kya krta, krta bhi h ya nh

//const values = coding.forEach(  (item) => {
//console.log(item);
//})

// const coding = ['js','c++','java','python','ruby']
// const values = coding.forEach(  (item) => {
// console.log(item);
// })
// console.log(values);

//yhn ye values to print hogae ye to console log m honi thi , lkn esny return kuch bhi nh kia return to undefined h mila, to yhn p agr appko kuch return krna h to appny manually return krna hoga

// const coding = ['js','c++','java','python','ruby']
// const values = coding.forEach(  (item) => {
// // console.log(item);
// return item //esmein meiny kha return karo to bhi undefined or agr mn upr wala cnsol commnt krn tb bhi undefined
// })
// console.log(values);
//to ye foreach value koi bhi value return nh kata ap chaho ya na chaho
// j.s k jo developers hn jo core comuty hai unhn pata h k kahi bar hm us eachproperty p kuch operation krna chahty or kahi br hm us value ko bas return krna chahty, ya condtinlly chk krna chhty

//NEW EXAMPLE, filter appko value return karta wapis krta, ab arrow function, aisy bhi define krty,() => (), agr single line ka h to () => single line p likh dain 
// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  //filter bhi appny andr callback lyta
// myNum.filter(  (num) => num > 4) // abhi ap esy run krogy to kch b nh ahega q k appny esko bola h nh k value chahye ya kahn store karo to esny value appko return ki h , ye operation foreach mn bhi hota lkn for each wapis nh krta, ye return karta hai to hm likh dyty esko variable mn store karlyty

// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNum = myNum.filter(  (num) => num > 4)
// console.log(newNum);
// //*jb bhi hm filter use krty to filtr mn appko call back fun milega jis mn appko hr value ko each access kia jaega, lkn usky bd apko dyni prti cndtion, jo jo log us condtin ko satisfy krngy true hgi to return hogi wrna nh hogi kafi jaga use krngy

//ab agr hm arrow fun ki trhn h lyty to

// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //ab neechy hr number ko hmny dedia num
// const newNum = myNum.filter( (num) => {
// num > 4
// })
// console.log(newNum); // run kia to empty arr [], agr appny purany lectr p dhiyn dia hota to i told you explicit n implicit return, fun mn kafi discuss kia th. arrow mn discuss kia t 1 jaga hmny without () parnthesis num1 + num2 kia 1 jga hmny (num1 + num2) prnthesis mn kia or 1 jaga obj ko lia humny ({username: "hitesh"}),, // to yae kahani h pehly hm prnthsis laga rhy thy to khud h return horha th, phir  appny {} curly braces laga diye 1 scope strt krdia to jb app scope strt krdaingy to return appko likhna prega, ye ghlti bht lg krty filter mn, remembr when u open scope you have to write return word, if you dnt open scopre you do write it in 1 line whatever your condtin is
// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
// const newNum = myNum.filter( (num) => {
// return num > 4
// })
// console.log(newNum);

// yae chz agr foreach mn krni hoti to kaisy krty

// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
// const newNum = []
// myNum.forEach( (num) => {
//     if(num > 4){
//         newNum.push(num)

//     }

// })
// console.log(newNum); //but yhn hmn thora logic lgana para thora syntax pr ghalt kchbhi nh h, dono h thk h jo smjh appko ahy

//1 bok ka example lectr 30 , 10:36, book ka arr h usmein kafi object h, hmny title dia , genre dia, , publish or edition. ab user kch filter laga rha appny webpage p , ab appko 1 exercise krni k user jo jo bol rha usy kr k dijiyeor usi trhn s prnt kijiyr ab hm prnt krty

// const books = [{}, {}, {}] // bht s objects h esy, neechy ap chahn to 1 lne mn kro chaho to return keyword, hm 1 line mn

// const userBooks = books.filter(  (bk) => bk.genre === "history" )
// //ab userbooks mn value konsi gae automtclly woi jo usy true mnti, wo sary obj jinmn genre history h, sirf woi user ko dikhae degi, ab 2 books ka data aya jb run kia q k 2 books h histry ki th

// console.log(userBooks);// sir k ps data th sirn krwaya

// userBooks = book.filter ( (bk) => {
//     return bk.publish >= 1995 && bk.genre === 'history'})
// console.log(userBooks);

// map sir ko foreach s acha lgta, map automatically return krta h
// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNumber = myNumbers.map( (num) => num + 10)
// console.log(newNumber);// khud h return krdeta filter ki trhn, agr app scope open kr rhy to return krna h

// //Chaining 2,3 mthods app drectly use krskty hoty bhi h, neechy filter lgaya mtlb jo bhi true hoga woi pass hoga
// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNumbers
            //    .map( (num) => num * 10)
            //    .map((num) => num + 1)
            //    .filter((num) => num>= 40)
            //    console.log(newNums);

// filter alg h whn true or flse wala game h, map mn sbhi return hog
//ARRAY.REDUCE mdn s parhna' reduce mn callbck func mlta , ab fun mn appko (accumulator, current value ), accumulator ko pata h nh k mn strt khn s krn to fun k lst mn 0 value dyty

// const myNums = [1, 2, 3]
// const myTotal = myNums.reduce( function (acc, curVal) {
//     return acc + curVal

// }, 0)
// console.log(myTotal); //run 6 to mjhy hr br pata krna, accumultr mn or curval mn kya arha



// const myNumber = [1, 2, 3, 4, 5, 6]
// const myTotalNumber = myNumber.reduce(function(acc, curVal){
//     return acc + curVal

// }, 0)
// console.log(myTotalNumber);
//ORRRRRRRRRRRRRRRRRRR

// const myNums = [1, 2, 3]
// const myTotal = myNums.reduce( function (acc, curVal) {
//     console.log(`acc: ${acc} and curVal: ${curVal}`);
//     return acc + curVal

// }, 0)
// console.log(myTotal); //acc ko jo bh val , k bd dyty woi ajti

// now in arrow fun

// const myNums = [1, 2, 3]
// const myTotal = myNums.reduce( (acc, curval) => acc + curval, 0)
// // console.log(myTotal); //mein koi esy ziada num nh dnga ye or uper wala dono thk hain ye smrt way or uper waly mn readibility aati
// const shoppingCart = [
//     {
//         courseName: 'js course',
//         price: 2999
//     },
//     {
//         courseName: 'python course',
//         price: 999
//     },
//     {
//         courseName: 'mobile dev course',
//         price: 5999
//     },
//     {
//         courseName: 'data scientist course',
//         price: 12000
//     },
    

// ]



// const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
// console.log(priceToPay);
//abhi meiny esy direct krdia agy ja k app esy verify krogy
//kahin item ki price number mn to nh, khn stringmn to nh

//ab appny ye course khreed liye ab appny 1 functionality introduce krni h k shopng crt mn jitny prices h enko add krdo, ye bht h cmn funtionlity syntax h jhn p arr mn bht s value ya obj mein to unhn add krna, to reduce use kia, ye item array mn hr 1 object ko denote kr rha




















































































