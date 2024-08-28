//inheritance,
//to bri basc si 1 class h jo 1 username create kr rae h, or 1 mthd bhi h esmn logMe , ye bas jo appny usernm set kia uska value dedeta h directly
class User {
    constructor(username){
        this.username = username

    }
    logMe(){
        console.log(`USERNAME is ${this.username}`); // q k class k pass crnt cntxt to h he to ths hamary pass hr class mn sb jaga available h 
        
    }
}
//ab agr kbhi LMS banarhy ya koi ecomrc bana rhy to es user ko appny admin banana parega kabhi teachr banana prega kbhi stu to userame to sbhi ka set krogy h 
class teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`a new course was added by ${this.username}`);
        
    }

}
//ab obj bana lyty tchr s 
const chai = new teacher('chai', 'chai@gmail.com', '1234')
const masalaChai = new User('masalaChai')
// masalaChai.addCourse() //ab msalachai k pass addcourse ka access hya nh to nh h access 
masalaChai.logMe() // masala chai k pass logme ka access h 
chai.addCourse()
chai.logMe() // inherit kr rhy to access h
 console.log(chai === masalaChai) //ab dono alg alg clsses s bn k ahy hn to false aya 
 console.log(chai === teacher); // fale q k wo 1 instance h , exct thori na ly k aaya h to wo chk krny k liye k usi s ye bani h 1 instnce h to appko 
 console.log(chai instanceof teacher); ///true
 console.log(chai instanceof User); // ab tchr bhi to 1 instnce h h kiska user ka to 'true' q k instance phr uska instnce
 
 
 

//call etc krna prega phir this bhi pass krna parega abhi previous lctr mn prha th , hn jee krna prhta th meiny kiye hn , q k ab vclass ka syntax h or super kywrd h to suprkw automatically rfr krega bhaishb konsi class extnd kr rhy thy to us class mn jata hn sth mn autmtclly mn bts this autmticlly ly jaownga whn ja k username set krdnga us usrnam ki value yhn hojaegor ap us ka access bhi yhn lypaogy 

//ab ye user ka cnstrctr to app ovrwt krna h chahogy q k teacher ka alg h cnstrctr hona chahye, ab teach bn rha to ussy app usernm to laingy h laingy  to extnd kr rhy to usernam pass kr k set to kr h daingy 