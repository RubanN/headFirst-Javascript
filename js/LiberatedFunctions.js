// function myFunction(num){
//     for(var i=0;i<num;i++){
//         console.log("Quack");
//     }
//     return num
// }
// console.log(myFunction(2));

// var fly = function(num){
//     for(var i=0;i<num;i++){
//         console.log("welcome to programming world");
//     }
// }
// console.log(fly(1));

// var migrating = true;
// var fly = function(num){
//     for(var i=0;i<num;i++){
//         console.log("Flying");
//     }
// }
// function quack(num){
//     for(var i=0;i<num;i++){
//         console.log("quack");
//     }
// }
// if(migrating){
//     quack(4)
//     fly(2)
// }

// var midi=true;
// var type="Piano";
// var midiInterface;

// function play(sequence){
//     console.log("sequence is called ");
// }
// console.log(play());
// var pause = function(){
//     stop()
// }
// console.log(pause());
// function stop(){
//     console.log("stop is called");
// }
// console.log(stop());
// function createMidi(){
//     console.log("createMidi is called");
// }
// console.log(createMidi);
// if(midi){
//     midiInterface = function(type){
//         console.log("all the function are called");
//     }
// }

var passengers = [
  { name: "Jane Doloop", paid: true,ticket:"coach" },
  { name: "Dr.Evel", paid: true ,ticket:"firstclass"},
  { name: "Sue Property", paid: false,ticket:"firstclass" },
  { name: "John funcall", paid: true,ticket:"coach" },
];
// function checkPaid(passengers){
//     for(var i=0; i<passengers.length; i++){
//         if(!passengers[i].paid){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(checkPaid());
// function checkNoFly(passengers){
//       for(var i=0; i<passengers.length; i++){
//           if(onNoFlyList(passengers[i].name)){
//               return false;
//           }
//       }
//       return true;
// }
// function printPassenger(passengers){
//     for(var i=0; i<passengers.length; i++){
//         console.log(passengers[i].name);
//         return false
//     }
//     return true;
// }
// console.log(printPassenger());

// function serveCustomer(passengers){
//     if(passengers.ticket ==="firstclass"){
//         alert("would you like to have cocktail or wine")
//     }else{
//         alert("your choice is coco or water")
//     }
// }
// serveCustomer(passengers)

// function createDrinkOrder(passengers){
//     var orderFunction;
//     if(passengers.ticket ==="firstclass"){
//         orderFunction =function(){
//             alert("Would you like to a cocktail or wine")
//         }
//     }else{
//         orderFunction =function(){
//             alert("your choice coco or water")
//         }
//     }
//     return orderFunction
// }
// function servePassenger(passengers){
//     for(var i=0; i<passengers.length; i++){
//         servePassenger(passengers[i])
//         if(passengers[i]==="firstclass"){
//             alert("would you like to have wine")
//         }else{
//             alert("choice is yours")
//         }
//     }
// }
// servePassenger(passengers)


var products =[
    {name:"GrapeFruit",calories:170,color:"red",sold:8200},
    {name:"Orange",calories:160,color:"Orange",sold:12101},
    {name:"Cola",calories:210,color:"caramel",sold:25412},
    {name:"Diet Cola",calories:0,color:"caramel",sold:43922},
    {name:"Lemon",calories:200,color:"clear",sold:14932},
    {name:"Raspberry",calories:180,color:"pink",sold:9427},
    {name:"Root Bear",calories:200,color:"caramel",sold:9909},
    {name:"Water",calories:0,color:"clear",sold:62123},
]
// var numberArray = [60,50,62,58,54,54];
// numberArray.sort();
// console.log(numberArray);

// function compareNumbersDesc(num1,num2){
//     if(num1>num2){
//      return 1;
//     }else if(num1===num2){
//         return 0
//     }else{
//         return -1
//     }
// }
// console.log(compareNumbersDesc(2,3));
function compareSold(colaA,colaB){
    if(colaA.sold >colaB.sold){
        return 1
    }else if(colaA.sold ===colaB.sold){
        return 0
    }else{
        return -1
    }
}
products.sold(compareSold)