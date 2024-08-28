//class constructor lecture 45 20;00
// jsky pass xxiada user uski co' ziada powerful
//mein chahta hn jaisy h user bane us user ko 1 unique id mil jae, jb app database etc mn save krogy to mongodb  automtclly jaisy h h app 1 user banaty ho   to usky sath underscore id attach krdeta to suppose krain woi functinlity hm yhn use kr rhy hn , uska nam createId dedety 

// class User{
// constructor(username){
//     this.username = username
// }
// logMe(){
//     console.log(`username: ${this.username}`);
    

// } // logme simoly log krdeta 
// createId(){
//     return '123'
// }
// }
// const hitesh = new User('hitesh')
// console.log(hitesh.createId()); // //code mn kam hony s xiada kam rokna zarroi hota h ye meiny kafi salon k experience s dykha sab access mt do roko chzn k 
////oRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRr

class User{
constructor(username){
    this.username = username
}
logMe(){
    console.log(`username: ${this.username}`);
    

} // logme simoly log krdeta 
static createId(){
    return '123'
}
}
const hitesh = new User('hitesh')
// console.log(hitesh.createId());
 // 123 agaya , acha ab khi br aisi situatin hogi k ap createid es methd ka access hr us obj ko nh daina chty jo es class s instanciate hua h to usky liye static 1 kw lagado agy, static us mthd ya prop ko access hony s rok deta  , hr br 1 unique id banay ki funtnlity appko bhi mil jae, kahi br dena chhta kahi br nh dena chahta bht s cases h 

 class teacher extends User(){
    constructor(username, email){
        super(username)
        this.email = email
    }
 }
 const iphone = new teacher('iphone', 'iphone@gmail.com')
// iphone.logMe()

console.log(iphone.createId()); //to static jaisy h appny krdia to wo appko kisi bhi child ko bhi access nh krny derha or kisi class ko bhi inherit krny ki koshsh kr rha to usy bhi nh krny derha 


