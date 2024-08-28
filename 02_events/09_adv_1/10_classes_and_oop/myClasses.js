//bhnd the sene js mn classes hoti nh hai prototype, obj or fun yae sb chlta h to majorly obviosly usi p bt krni h //ye sara sb kuch horha h ES6 k bad app jo bhi js use kr rhy wo es6  k bad bht door agahy ho app or ye sb syntacticl sugr he hai abhi bhi , sara kam appka new keywrd udhar h s horha h , sab sy acha syntax jo h wo apko constructr base h milta h jo k new keywrd behnd the sen wo kr rha th ab hm usy cntrl krskty hn , app class likho or seedha {} ab appko wo obj or fun bnany ki zrort nh, ab class mn appky pass bht s proprts hoskti app fun bhi add krskty , sabse imp h appka cnstrctr yhn p , cntrctr kb call hota jaisy h class s 1 obj initialize hoga yani woo new keywrd jaisy h kam mn logy , waisy h cnstrctr appny app call hojataa h , 1 methd bhi h encryptpasswrd , passwrd cleartextformat mn to rhkho gy nh to lylyty , waisy to ye fun h lakin q k class mn agahy to methd bolaingy , programmres hain , 
// class user {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password  //waisy cnstrctr hr br likhna no need but opportunty mil rae power ml rae to lylyty
//     }
//     encrytPassword(){
//         return `${this.password}ABC`

//     } // ab jo bhi es mthd ko call krela usko dedo this.passwerdABC

// } 
// //ab user banalyty new kywrd s 
// const chai = new user('chai', 'chai@gmail.com', '1234')
// console.log(chai.encrytPassword()); //chai k andr s encryppaswrd ly ao or encrypt kardo // run kia to 123ABC
// console.log(chai);

////oRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR or mthd add krty hn , suppose hm username ko capitalize krna chahty 

// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password  
//     }
//     encrytPassword(){
//         return `${this.password}ABC`

//     } 
//     changeUsername(){
//       return `${this.username.toUpperCase()}.`  
//     }

// } 
// //ab user banalyty new kywrd s 
// const chai = new user('chai', 'chai@gmail.com', '1234')
// console.log(chai.encrytPassword()); 
// console.log(chai);
// console.log(chai.changeUsername());

//ab aty hn underTheHood agr mjhy class ka syntax nh mila hota to kaisy kam hota 
// //BTS

// function User(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.encryptPassword = function() { // encryp passwrd ko bola app 1 fun ban jhn
//     return `${this.password}ABC`
// }

// User.prototype.changeUsername = function() {
//     return `${this.username.toUpperCase()}`
// }

// const tea = new User('tea', 'chai@gmail.com', '1234');
// console.log(tea.encryptPassword());
// console.log(tea);
// console.log(tea.changeUsername());
