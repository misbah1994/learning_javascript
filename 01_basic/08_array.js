// const myArr = [0,1,2,3,4,5] //element couldbe in any type boolean string etc, mix and resizable. first array ki indexing hoti zero s. copy operation karaingy to ye shallow copy banata, same reference point means jo bhi change karnga original array mein bhi change hoga
// const myHeroes = ['shakhtiman', 'dograj'] 
// const myArr2 = new Array(1, 2, 3, 4) 
//2nd method array declaration in this method you dont add square bracket you do only value automatically itll add , array mein bhi appkoprototype access milta
// console.log(myArr[0]);


//array methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()     //koi argument nae dena simple jo last value it will be deleted
// myArr.unshift(9)           // insert in array start to sari arr kivalu shift karni padi mjhyyahn to 4 5 value thif agar ziada hoti to kaafi time consuming operation hojata. optimization bad ki cheezain h pehly cheez kam to kary jaisy appny usy design kia
 //element couldbe in any type boolean string etc, mix and resizable. first array ki indexing hoti zero s. copy operation karaingy to ye shallow copy banata, same reference point means jo bhi change karnga original array mein bhi change hoga
 //element couldbe in any type boolean string etc, mix and resizable. first array ki indexing hoti zero s. copy operation karaingy to ye shallow copy banata, same reference point means jo bhi change karnga original array mein bhi change hoga

//  const myArr = [0,1,2,3,4,5]
// myArr.shift()

// // console.log(myArr.includes(3)); //kuch operations
// console.log(myArr.includes(9));
// console.log(myArr.includes(3));
// console.log(myArr.indexOf(9));  //nae hsi 9 tabhi -1 dia esny
// console.log(myArr.indexOf(1));  

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr); // convert string and also bind

//slice and splice
// console.log('A', myArr); // same array h 
// const myn1 = myArr.slice(1, 3) //1st se start kijiyr 1,2 include third nae hota


// console.log(myn1);
// console.log('B', myArr); //same array h slice use kia

// const myn2 = myArr.splice(1, 3)
// console.log('C', myArr); //splice nikal gaya original array h manipulate hogaya
// console.log(myn2);
// // konsa operation original array ko manipulate karta or konsa nae karta yaad rakhao


// array part 2


const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]
// console.log(marvel_heroes.push(dc_heroes)); // dont run kia 4 aya q k esny dc k 3 elements ko 1 he lylia
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes); //array n array ko bhi data lylia ye kisi bhi type ka data lylyta, yahn element 4 ban rahy
// console.log(marvel_heroes[3][1]); // 0 s start hua to 3 p 2sra array lag gaya

// const all_heroes = marvel_heroes.concat(dc_heroes) // concatinate return karta new array to hamain esy new variable mein hold karna hoga to .push existing p lag jata. mostly not use this but use spread operator


// console.log(all_heroes);


// const all_new_heroes = [...marvel_heroes,...dc_heroes] // spread operator kach ka glass drop kardain spread. mostly people prefere coz there's limit
// console.log(all_new_heroes);

// const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7,[4, 5]]] // flat single array mein convert app depth bhi desakty ho ya infinity jo k hack h
// const another_newArr = another_arr.flat(Infinity)

// console.log(another_newArr);


//jab app data scraping kar rahy, jab app data select kart kisi webpage s to alag format mn ata node list mn string ya phir obj mein to chahye to arr hota arr p loop karsakty

console.log(Array.isArray('hitesh')); // yahn bataya k ye false hai
console.log(Array.from('hitesh')); //esny esy array banadia
console.log(Array.from({name: "misbah"})); // ye esko nae karparaha to empty array dia[] appko bolna prega k keys ka ya value ka array banao.nae bana paega to empty array dega


let score1 = 300
let score2 = 400
let score3 = 100

console.log(Array.of(score1, score2, score3)); // insted of .from you can say .of also











