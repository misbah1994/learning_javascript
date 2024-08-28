//scope ki kahani start hoti let const or var s
// let a = 10
// const b = 20
// var c = 30 //classic variable, ye jo cheez h hamary blockscope ko jaisa hona chahye tha waisy kam nae karta h. {} curly braces h hr programming lan mein scope h, {} ye jb kisi fun ya if else k sath ata to esy scope bola jata. obj mein hai lakin wo obj declaration h wahn sope nae. fun or ifelse ka scope

// console.log(a); // 3n0 log asani s hogahy
// console.log(b);
// console.log(c);

// if(true){  
//     let a = 10
//     const b = 20
//     var c = 30    

// }
//en 3no ko meiny ifelse mn declare kia to obviously mera kam yae parh raha, jo memory meiny allocate ki h uska scope yhn s yahn tk hai mtlb curly braces mn, ye agar {} k agy phnch gaya to prob hsuppse loop mn apny 1 i variable use kia 4 loop likhy or 4ron mn i variable likha to prob hai jb 10 programmer code kar rahy sabhi a use kar rahy sbhi appna appna method ban rahy , fun bana rahy to sbko banany ka allow hona chahye
    
// console.log(a);  //run kia esny kaha k a def nae to hona bhi nae chahye q k eska kam andar fun mn khatm
// console.log(b);  //ye bhi nae h define
// console.log(c); //ab dykhain ye 30 print hogaya ye 30 bhr ana h nae chahye th
//**************************************************************************************** */


//now suppose 1 progrmr yhn code kar raha usny likha
// var c = 300



// if(true){
//     let a = 10
//     const b = 20
//     var c = 30  //agr app yhn sirf c bhi declare karo var na likho tb bhi prob ahegi like this c = 30. if mein jo bhi h wo hai blockscope usky bhr jo h wo hglobal scope . to vae ko sab h avoid karty. global sope mn jo likha wo scope k andr available hoti hai lakin blockscope ki value bhr nae jani chahy



// }
// console.log(c); // 30 aya 300 nae aya
// //////////////////////////////////////////////////////////////////////////////////////////////
//window mein global scope alag hai or code environment mein jb node k through karty wo alg h

// let a = 300
// if(true){
//     let a = 10
//     const b = 20
//     console.log("Inner:", a);


// }
// // for (let i = 0; i < array.length; i++) {
// //     const element = array[i];
    
// // }


// console.log(a); //300 aya

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// lecture 22, scope level and mini hoisting in js, you know DOM to answere it document yani kaisy html k page ko manipulate kia jata js k through, dom document object model
// scope 1 alg entity h js mein eska globl s koi taaluq nae
//nested function mein child , parent variable ko access karpaaty
// function one(){
//     const username = "hitesh"
// console.log(username);
//     function two(){
//         const website = "youtube"  //kids chin skty bron s icecream bary nae lyskty, to two access karskta h one k va
//         // console.log(username);


//     }
//     // console.log(website);   //ye bhr agaya scope s to nae hoga execute

// // two()

// }
//  one()


// //if else mein dykhty ab

// if(true){
//     const username = "hitesh"
//     if(username === "hitesh"){
//         const website = "  youtube"
        // console.log(username + website);



    // }
    // console.log(website);  //nae hoa access

// }
// console.log(username);    //not access

//my practice///////////////////////////////////

// if(true){
//     const userName = 'Misbah'
//     if(userName === 'Misbah'){
//         BookName = 'youtube.com'
//         console.log(userName + BookName);

//     }
    


// }


/***********************************interesting***********************************/
// console.log(addOne(5))
// function addOne(num){   //yahn sirf declare kia hai agr mn es addOne(5) ko uper ly jao to ye print hoga
//     return num + 1


// }
// addOne(5)
//oR


// console.log(addTwo(3));  //ye access nae hoga'

// const addTwo = function(num){ //yhn nae hoga q k yhn declaration k sath hmny 1 variable mn hold bhi kia h, ye agy ja k concept ata esy khty HOISTING
//     return num + 2
// }
// // addTwo(3)
// console.log(addTwo(3));
//dono function h lakin addtwo waly ko kabhi kabhi expression bhi boldety, ye 1 variable ki trhn h js mein variable bht powerful hoty kuch bhi hold karlyty jsonvalue hogae fun hogaya kuch bhi hold karlyty










