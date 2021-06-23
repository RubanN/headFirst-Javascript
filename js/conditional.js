
// The First chapter HEAD FIRST BOOK

//Test for jokes
var joke = "Javascript walked into a bar....."
var toldJoke = 'false';
var $punchline = 'Better watch out those semi-colors';
var ebtahe = 20;
var result;

if(toldJoke ==true){
    alert($punchline)
}else{
    alert(joke)
}
// Movie Night
var code = 98104;
var orange =12;
if(!orange){
    console.log('there is no orange');
}else{
    console.log('yes there is some orange');
}


//How the while loop works:
var scoops =1;
while(scoops>0){
    document.write("Another scoop!<br>");
    scoops = scoops-1;
}
document.write("Life without icecream is not the same!<br>");
if(scoops <3){
    alert("ice cream is runing low")
}
if(scoops >=5){
    alert("Eat faster, the ice is going to melt")
}else if(scoops === 3){
    alert("ice cream is running low")
}else if(scoops ===2){
    alert("ice cream is two")
}else if(scoops ===1){
    alert("ice cream is one")
}else{
    alert("Still lots of ice cream left, come and get it")
}

//Coding a Serious Javascript Application

var word ="bottles";
var count =99;
while(count>0){
    console.log(count+""+word+"of beer on the wall");
    console.log(count+""+word+"of beer");
    console.log("Take one down , pass it around");
    count = count-1;
    if(count>0){
        console.log(count+""+word+"of beer on the wall");   
    }else{
        console.log("No more"+word+" of beer on the wall");
    }
}


// SECOND chapter Head First 
var randomLoc = Math.floor(Math.random()*5);
var location1 =randomLoc;
var location2 =4;
var location3 =5;
var guess;
var hits=0;
var guesses =0;
var isSunk = false;
while (isSunk==false) {
    guess=prompt("Ready, aim, fire!(enter a number 0-6):");
    if(guess <0 || guess>6){
        alert("Please enter a vaild cell number")
    }else{
        guesses = guesses +1;
        if(guess==location1 || guess==location2 || guess==location3){
            alert("HIT")
            hits=hits +1;
            if(hits==3){
                isSunk=true;
                alert("you sank my battleship")
            }
        }else{
            alert("MIss")
        }
    }
}
var status = "you look"+guesses+"guesses to sink the battleship,"+"which means your shooting accuracy was"+(3/guesses)
alert(status)


//AND && || 
var inStock =true;
var onSale = true;
var price =50;
if(inStock==true){
    if(onSale==true){
        alert("buy buy buy")
    }else{
        alert("there is no Stock")
    }
}
if(inStock == true && onSale==true){
    alert("BUY BUY BUY")
}

if(inStock==true && (onSale==true || price<60)){
    alert("BUY BUY BUY")
}

var temp = 81;
var willRain = true;
var humid = (temp>80 && willRain==true);
alert(humid)
var guess = 6;
var isValid = (guess>0 && guess<=6);
console.log(isValid);
var KB = 1287;
var tooBig = (KB >1000);
var urgent = true;
var sendFile = (urgent == true || tooBig ==false);
alert(sendFile)
var keyPressed = "N";
var ponits = 142;
var level;
if(keyPressed =="Y" || (ponits >100 && ponits<200)){
    level =2
}else{
    level =1
}

var price = 142;
if(price <200 || price >600){
    alert("Price is too low or too high! don't buy the gadgets")
}else{
    alert("The price is right! BUy the gadget")
}
