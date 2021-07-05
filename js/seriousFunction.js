// function Decalaration
function handler(){
    // alert("Anoyoumous function")
}
window.onload =handler

// function Expression
window.onload = function(){}

function cookieAlarm(){
    // alert("Time to take the cookie out of the owen")
}
setTimeout(cookieAlarm,2000)

setTimeout(function(){
    // alert("hey ruban")
},3000)

// function vaccine(dosage){
//     if(dosage>0){
//         inject(dosage)
//     }
// }
// administer(patient,vaccine,time);

// var migrating = true
// if(migrating){
//       quack(4);
//     fly(3);
// }
// var fly = function(num){
//     for(var i=0;i<num;i++){
//         console.log("Flying");
//     }
// }
// function quack(num){
//     for(var i=0;i<num;i++){
//         console.log("Quack");
//     }

// }

//nested functions
// var migrating = true;
// var fly = function(num){
//     var sound = 'Flyinng';
//     function wingFlapper(){
//         console.log('sound');
//     }
//     for(var i=0;i<num;i++){
//         wingFlapper();
//     }
// };
// function quack(num){
//     var sound = 'Quack';
//     var quacker = function(){
//         console.log("sound");
//     };
//     for(var i=0;i<num;i++){
//         quacker()
//     }
// }
// if(migrating){
//     quack(4);
//     fly(3)
// }

//Lexical scope 

// var justVar = "oh dont work you worry about it";
// function whereAreYou(){
//     var justVar ="inner";
//     return justVar
// }
// var res = whereAreYou();
// console.log(res);


// var justAvar = "don't worry about it ,im Global";
// function whereAreYou(){
//     var justAvar = "Just local variable";
//     function inner(){
//         return justAvar;
//     }
//     return inner();
// }
// var result = whereAreYou();
// console.log(result);


// function whereAreYou(){
//     var justAvar = "Just an every day Local";
//     function inner(){
//         return justAvar;
//     }
//     return inner
// }
// console.log(whereAreYou());
// var innerFunction = whereAreYou();
// var res = innerFunction();
// console.log(res);

// var count =0;
// function counter(){
//     count =count + 1;
//     return count;
// }

// function makeCounter(){
//     var count=0;
//     function counter(){
//         count = count + 1;
//         return count;
//     }
//     return counter
// }
// console.log(makeCounter());