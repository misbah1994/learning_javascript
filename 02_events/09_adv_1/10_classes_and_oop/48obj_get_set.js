//20;00, obj s gtrStr , to sps email lia to hrdCoded val lylo q k obj to hm es trhn nh bana skty waisy to app chaho to obj.create kr k ap person etc deskty hn factory fun kr skty thy but basic basic syntax batadeta hn 
const User = {
    _email: 'chai@gmail.com',
    _password:'abc',
// ab mn nh chahta k hr koi en values ko directly access krly to get or set
get email(){
    return this._email.toUpperCase()
},
set email(value){
    this._email = value
} 


}

const tea = Object.create(User)
console.log(tea.email);

//ye syntax appko etna ziada intuitive nh lag rha hoga q k kaafi kch obj issues to ziada tar 90% appko class wala milega , to jb const tea lia to app use krty ho new wo h appka cnstructr to yhn app factory fun use krskty ho obj.create(). esmn appko dena hoga () kis obj k bases p mein 1 naya fun create kr k do , mein () esmn user deskta k user k base p 1 obj create kro or usko tea mn refer krdo , 

//actully mn hota kya h bts jaisy h appusy _email?passwrd likhy, _ dikhata k 1 private proprty n define kr rha hn  ya normal user k use mn nh ahegi , privt proprty ka bataonga k es2020 mn kya hua , lkn jb appny get or set likha to etna meaning nh rhta js mein _ ka , ab wo dykhyga k appky email es trhn ki koi proprty h abjo bhi es class ka obj h jo bhi create hua essy , usky pass ye .email h , yaad rkhain meiny yhn get mn 1 methd banaya h 26;00, jb get kia to wo memory s ly k aya usy nh pata k memory mn wo kaisy store h , q k appny wapis laty time rsty mn cherChaar krdi h mtlb ovrrt, 

// ab jaisy app arr mn .lengt prop lyty to arr ko pata kaisy h k meiry p .length prop 9 hai ya 6 hai obvoiuly whn calcultr horae to whn bhi bts js mn  gtr or str rkha hua k app usy set nh krskty ho , setr mn value ly to li appsy lkn yhn kch kr h nh rhy , seedha keh rhy hatao esko return krdo hogaya kaam to whn es trh vlu ko lock krdia jata h k hm nh krny daingy ye kam appko , lkn ap jb get krny ki koshish krty to bts wo arr p jata loop lagata calcult kr k dekhta k etna lenth th or 0 s start hoti indexing , 
//ES2022 mn 1 proposal aya hbetter progrmng k liye whn hm # use kr rhy hn _ ki jaga , to app #use kro to proprty ka access nh dia jaega , bts gtr str krdega , abhi hm manty hn k _ private h but agr koi bhi obj us _ ko access krna chahe to krskta h koi rok nh rha usy , hmny wo getSet laga k overrt krdia h taky app email ko access nh kr pao
