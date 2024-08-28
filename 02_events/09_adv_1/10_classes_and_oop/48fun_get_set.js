//15;00 phly k time p cls nh thi to hm fun mein ya obj mein krty thy to ab get or set kaisy lngy to obj khud allow krta h hmny dykha k fun khud bhi to obj h h , fun k 2 bhvr h light, wave prha h wo sb? khair leve to fun 2 trhn s bhv krta fun bhi h or obj bhi to app uski obj ki properties ki power ko call krskty ho , ab ye jo ffnProprty h ye gettr or str ki h h , to phly t appko esko cntxt dena hoga this q k eska khud ka this nh hota, to khna prta k appka ths to khali h ya global ko rfrnc kr rha phir jo overwrt kra jaisy email 
function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', { //pswrd k liye mein esy copy paste krskta hn 
        get: function(){
            return this._email.toUpperCase()

        },
        set: function(value){
            this._email = value  

        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()

        },
        set: function(value){
            this._password = value  

        }
    })


}
const chai = new User('chai@gmail.com', 'chai')
console.log(chai.email);
console.log(chai.password);

//es code mn or class waly code mn yae dffrnce h k class wala syntctically avha lg rha h es mn constructr h phir hr property ka gtrStr h , cstmzed kr rkha appny nh nh aisy hr kisiii ko access nh dnga , 1 or bhi syntax h ye to esy mn modern syntax khta q k app proprty etc use r rhy ho , fun base syntax kia haaannnjee app obj base bhi kr skty 