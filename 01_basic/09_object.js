// two ways of declare object 1 literal or 2sra constructor

//singleton , kisi bhi constructor s app banaty to singleton 1 obj banta
// literals ki trhn declare karty to singleton nae banta
// constructor s singleton banta

// Object.create // constructor method
// const jsUser = {} //bas etni si bt , obj mein key or values ka chakkar h jaisy app arr declare karty wahn appky pass 1 h tareeka hai 0 s access karty. obj mein key or value dono define karsakty wahn 1 2 3 h chalega

 
// // myArr = ["h", "i"]
// // myArr[1]
// const mysym = Symbol("key1")
// // const jsUser = {
//     name: "misbah" ,   //by default system name ko string h process karta
//     age: 18,
//     // mysym: "mykey1", // symbol ko appny square bracket mn h likhna hoga or access bhi [] mein tabhi wi type of symbol dega warna string mein dega
//     [mysym]: "mykey1",

//     "full name": "misbah Rehman" , // esy app . sy access nae karsakty
//     location: "jaipur",
//     email: "misbahrehman@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["monday", "saturday"]


 
// console.log(jsUser.email); // sir not recommended kar bhi sakty jb . sy access karty to string mein nae likhty email
// console.log(jsUser["email"]); // squarebracket mein string ki trhn access
// console.log(jsUser["full name"]);
// // console.log(jsUser.mysym); // app eska type dain to string ahega es trhn , symbol nae ahega
// console.log(jsUser[mysym]);
// jsUser.email = "hitesh@chatgpt.com" //email change ki yahn
// Object.freeze(jsUser)  //yahn hmny email freeze kardi, kis obj ko freeze karna to jsuser ko. esky bad app jo bhi changes lagahngy wo propogate nae hoga error to nae dega lakin propogate nae hoga
// jsUser.email = "hitesh@microsoft.com"
// console.log(jsUser);

// ab function add kart , js mein function mein koi discrimination nae hota as a variable app usy use karain

// jsUser.greeting = function(){
//     console.log("hello js user");
// }
// console.log(jsUser.greeting); // es trhn karaingy to function execute nae hua sirf fun ka reference aaya 
// console.log(jsUser.greeting());

// jsUser.greetingTwo = function(){  // yahn hm same obj ko reference karna this. s  appko jo obj hai usmein jitni properties h access karty hain , backticks use hogi 
//     console.log(`hello js use ${this.email}`);
// }
// console.log(jsUser.greetingTwo());
  //*************************object part 2 */
// const tinderUser = new Object() 
// const tinderUser = {}              // dono mn koi internal difference nae print karny p dono empty obj daingy
// tinderUser.Id = '123abc'
// tinderUser.name = 'misbah'
// tinderUser.isLoggedIn = false
// // console.log(tinderUser); // singletone, costructor

// // const regularUser = {
// //     email: 'misbahrehman@google.com',
// //     fullname:{
// //         userfullName:{
//             // firstname:'misbah',
//             lastname: 'rehman'

//         }
//     }


// }
// console.log(regularUser.fullname); //kahi br appko ? jaisa syntax bhi milega, ye thora protection kardeta suppose fullname afar exist h nae karta ho to, to kahi br api s response ata to ye syntax use karna parta username? agar ye value h to kariye , warna woi if else laga k


const obj1 = {1: 'a', 2: 'b' }
const obj2 = {3: 'a', 4: 'b' }
const obj4 = {5: 'a', 6: 'b' }

// const obj3 = {obj1, obj2} //aisy nae karna , woi arr wala h agar appko yaad ho
// const obj3 = Object.assign({}, obj1, obj2, obj4) // ye method app kam h use karogi,yahn empty paranthesis dena lazim h ye 1 optional parameter h ye jitni vale h combine hojagi or guranteed h result yae ahega, empty parantesis ko target man lo baqi obj1,2,3 ko source maan lo, empt paranthesis nae ho to ye obje1 mein jarahy hai result mn sae ahega lakin jaty
const obj3 = {...obj1, ...obj2, ...obj4} //90% ye method karogy app spread operator

// console.log(obj3);


// jab database s value ahegi suppose appky pass user ahe hain wo arr of object ahaingy[{}], arr mein bht sary obj hai appky pass appko loop through karna ya value print karni to ya  to app loop lagalain ya first value acces kaena user[1].email pehly first vale 1 obj h phir app .notation use karsakty
//  const user = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//  ]




 
//  // arr mn bht s obj hain
// //  user[1].email


//  console.log(tinderUser);
//  console.log(Object.keys(tinderUser));
// //jb bhi app object. karty to usy nae pata app kis obj p  run kar rahy, appko output value jo milegi uska datatype hai arr, app loop laga sakty espy kai jaga kam mn ly sakty. bht h interesting or ht he impo h 
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// //kahi br ap obj mn pura loop through kar rahy or loop k bd 1 value nikal rahy, kahi dafa wo value exist nae karti to nae karti to crash k chances hoty ya to app manually dykhain ya app simply ussy puch bhi skty
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// //obj declare kart huey kch aisy methods hoty jisky through app uski looping bnd karsakty, kahi br data base k doran aisa kia bhi jata specially



//object destructure and json api intro//
//destr arr or obj dono ki hot, react parhaingy wahn s obj milega usy destr kar k valu lyni pareg

// const course = {
//     coursename: 'js in hindi',
//     price: '999',
//     courseInstructor: 'hitesh'
// }

// // course.courseInstructor
// // const {courseInstructor} = course  //agar appko ye courseinstr 3,4 dafa print karwana to br br likhna parega to ye method h 
// const {courseInstructor: instructor} = course  // appko agr courseinstructor bara nam lag raha to app apni mrzi s bhi naam desakty esi ko khty hm obj ko kstrhn destr karty
// console.log(instructor);

// console.log(courseInstructor);




//ap kch navbar bnahngy react mn, jb app nvbar ko cl karaingy to logo ye hoga home mn ye likhna, by default 1 props hota to props.company props. etc to bht log nae kart wahn ata destru ka concept seeda yahin [{company}] kuli braces dyty or comp likh dety

// const navbar = () => {}
// const navbar = ({company}) => {

// }
// navbar(company = 'hitesh')  //same obj wala concept h react mn smjha jata k app js parh k h arahy hn destru

//jb bhi appko apna kam kisi or k sir p dalna usy API kehty, restaurant example to menu card api ka documentation h 1 trhn s, API kuch values ati backend s app usy kaisy likhty, pehly k time p XML structure mn ati thi to wo bht complex hota th, abhi value ati JSON mn , jaison kaisa dikhta {} jee yae JSON h, JSON m keys or value usually string hoti
// 1 url hai api.github.com/users/hiteshchoudhary, same response aya 1 obj hai jiska koi nam nae, API cal es trhn ati ,mjhy seekhna k api mein ya js mn fetch method kaisy use karta, fetch method s ye url cl karnga to ye data mil jaega
// arr mn bhi APIs hoti [{{{}}}],1 API h random user me to esy smjhny k liye json formatter 1 tool h, app khud ka bhi bana skty JSON simply javascript object notation hai, not only limited in javascipt but puri api industry mn chahy app ruby on rail mn ya php mn, appko obj json formt mn h bhejna hot


// {
//   "name": "hitesh",
//   "coursename": "js in hindi",
//   "price": "free"
// }
// next video mein fun or scope ki bt k kis trhn packaging karty data ko, kaisy fun execute karta kahn memory space lyta function akely nae parhy jaty esky sath appko js ka memory mng bhi parna parhta





