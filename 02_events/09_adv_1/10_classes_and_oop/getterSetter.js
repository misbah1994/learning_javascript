//48 lectr getter setter and stack overflow
//mn appny paid courses mn higherOrderFuntion backend k sth prhata h, to 1 special usecase hota whn , hmny array k map reduce etc dykhy ye bhii 1 trhn s higher order fun h h , class create krlyty ye bas 1 wrapper h under the hood to woi prototyp etc chl rha 
// class User{
// constructor(email, password){ //store krngy vriable mn 
//     this.email = email
//     this.password = password
// }
// }
// const hitesh = new User('hitesh@gmail.com', '123')
// console.log(hitesh.password);

//  kahi br hmn fineGrainControl chahye hota h, koi pswrd pchy to passwrd nh bataonga ya encrypted passwrd return krn  , bht casess hoty appny class banae or app usmn properties hoti kvh unka access sbko nh dena chahty , or agr koi lyna chahta to kch custmized code krna chthy so many scenerios and for that your getter and seter comes , //ab gtror str kya h suppose mn kisi ko passwrd ka access dena h nh chahta , to kaisy error daingy , gtrStr by default hr class mn hoty lkn q k enpy hmny kch code likha h nh h to default bhvr h rhta, enh cntrl krny ka easy treeka hota h , jo bhi appky variabbles ya properties bol skty ho  enpy gtr or str laga skty ho 
// class User{
// constructor(email, password){ //store krngy vriable mn 
//     this.email = email
//     this.password = password
// }
// get password(){
//     return this.password.toUpperCase() //get ka perspctive dykhiyega class k bhr s koi value get krna chahty ho , class k andr set krna chahty to setter
// }
// set password(value){
//     this.password = value

//  }
  //q k str h to hamesha usmn value to dalni pregi chahy num ho string ho value h , ab app cnstrctr mn bhi set kr rhy ho or set mn bhi set kr rhy ho mamla kya  , etni jaga allow h kya set krna , to error aya callStack size exceeded, appny set mn jb val set ki to constructr br br call hua jarha h, confused horhy hn race lg jati un dono k bech mn k krna kya h, constrctr bhi value set krny ki koshsh kr rha h or hmny customized gettr or str bhi bana diye , to constrctr or set k bch mn race lg jaati h, phr kvch disprincy dkhti k yeh nh set krna ye krna    
// }
// const hitesh = new User('hitesh@gmail.com', '123')
// console.log(hitesh.password);
// to es problm ka solution thora unique h or esky liye 1 alternative approach bhi d ati h to passwrd set krty huey app yh 1 new property h banalijiye ab essy farq nh parhta k user kya derha h or cnstrctr m usy kya bol rhy wo property normal bhi hoskto h , wo jo value set horae h wo getrstr s horae h 

// class User{
//     constructor(email, password){ //store krngy vriable mn 
//         this.email = email
//         this.password = password
//     }
//     get password(){
//         return this._password.toUpperCase() 
//     }
//     set password(value){
//         this._password = value.toUpperCase()
    
//      }
//     }
//     const hitesh = new User('hitesh@gmail.com', '123')
//     const misbah = new User('misbah@gmail.com', 'abc') //get krty time uppr case kia hua h 
//     console.log(hitesh.password);
//     console.log(misbah.password);

// // now suppose get krty time mn uprcase ly rha or set krty time mn uski value as it is ly rha 11;00
// class User{
//     constructor(email, password){ //store krngy vriable mn 
//         this.email = email
//         this.password = password
//     }
//     get password(){
//         return this._password.toUpperCase() 
//     }
//     set password(value){
//         this._password = value
    
//      }
//     }
//     const hitesh = new User('hitesh@gmail.com', '123')
//     console.log(hitesh.password); // to result mn koi frq nh ahega but DB mn woi set h , or str ko return nh krty kbbhi bhi 
    
    
class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()  //ab ye _email ya passwrd 1 private proprty bn gae andr
    }
    set email(value){
        this._email = value

    }
    get password(){
        return `${this._password}hitesh`
    }
    set password(value){
        this._password = value
    
     }
    }
    const hitesh = new User('hitesh@gmail.com', '123')
    console.log(hitesh.password);
    console.log(hitesh.email);
    //15;00
    
    