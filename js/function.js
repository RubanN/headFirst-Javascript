var dogName = 'rover';
var dogWeight = 23;
if(dogWeight >20){
    console.log(dogName+ "says WOOF WOOF");
}else{
    console.log(dogName+"says woof woof");
}
dogName ="spot";
dogWeight =13;
if(dogWeight >20){
    console.log(dogName+"says WOOF WOOF");
}else{
    console.log(dogName+"says woof woof");
}
dogName ='spike';
dogWeight =53;
if(dogWeight >20){
    console.log(dogName+"says WOOF WOOF");
}else{
    console.log(dogName+"says woof woof");
}
dogName ='lady';
dogWeight =17;
if(dogWeight >20){
    console.log(dogName+"says WOOF WOOF");
}else{
    console.log(dogName+"says woof woof");
}


// simple way of writing function
function bark(name,weight){
    if(weight>20){
        document.write(name+"says WOOF WOOF<br/>")
    }else{
        document.write(name+"says woof woof")

    }
}
bark("rover",23)
bark("spot",13);
bark("spike",53)
bark("lady",17)

// What can you pass to a function
saveMyProfile('ruban',1991,3.82,false)

function saveMyProfile(name,birthdate,GPA,newuser){
    if(birthdate>=2004){
        document.write("yeah you are too younger")
    }else{
        document.write('sorry ')
    }
}

//Variable
function dogYears(dogName,age){
    var years  = age*7;
    document.write(dogName+"is"+years+"years old<br/>")
}
var myDog = "fido";
dogYears(myDog,4);

// Function
function makeTea(cups,tea){
    document.write("Brewing"+cups+"cups of "+tea)
}
var guests =3;
makeTea(guests,"Ruban")

// Javascript is pass by value 
var age =7;
function addOne(x){
    x=x+1;
}
console.log(addOne(x));
//weird functions
// What happens when we don't pass enough arguments

function makeTea(cups,tea){
    console.log("Brewing"+cups+"cups of "+tea);
}
console.log(makeTea(3));

//Function can return things too 

function bake(degree){
    var message;
    if(degree>500){
        message="I am not a nuclear  reactor "
    }else if(degree<100){
        message="I am not a refrigerator"
    }else{
        message="That's a very comforable temp for me"
        setMode("bake");
        setTemp(degree)
    }
    return message
}

function addOne(level,score){
    var bonus = level * score*1;
    return score + bonus;
}
console.log(addOne(23));

var avatar = "generic";
var skill = 1.0;
var pointsPerLevel = 1000;
var userPoints = 2008;

function getAvatar(){
    var level = points/pointsPerLevel;

    if(level ==0){
        return "tedday bar"
    }else if(level ==1){
        return "Cat"
    }else if(level >=2){
        return "Ruban"
    }
}
function playTurn(player,location){
    points =0;
    if(location==1){
        points = points+100
    }
    return points
}
var total = playTurn('rub',1);
alert(points)

//Global and Local

var points =6;
function playTurn(player,location){
    points =09;
    if(location==1){
        points = points+100

    }
    return points;
}
var total = playTurn('Ruban',1);
alert(points)

var x=32;
var y=44;                         
var radius = 5;

var centerX = 0;                             //arguments
var centerY = 0;                   
var width=600;
var height=400;

function setup(width,height){                //Parameters
  centerX = width/2;
  centerY = height/2;
}
function compuerDistance(x1,y1,x2,y2){
    var dx = x1-x2;                           //Locals
    var dy = y1-y2;
    var d2 = (dx*dx) + (dy*dy);
    var d = Math.sqrt(d2);
    return d
}
console.log(compuerDistance(d));


