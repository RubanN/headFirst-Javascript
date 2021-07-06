// Object literals
var taxi ={
    make:"Webvile Motors",
    model:"Taxi",
    year:1955,
    color:"yellow",
    passengers:4,
    convertiable:false,
    mileage:281341,
    started:false,
    start:function(){this.started=true;},
    stop:function(){this.started=false;},
    drive:function(){
        console.log("Yes you can drive");
    }
}
taxi.drive()

function Dog(name,bread,weight){
    this.name = name;
    this.bread =bread;
    this.weight = weight;
}
var fido = new Dog("fido","Mixed",38);
var fluffy = new Dog("fluffy",'poodle',30);
var spot = new Dog("spot","chihunha",10);
var dogs=[fido,spot,fluffy,];
for(var i=0;i<dogs.length;i++){
    var sixe = 'small';
    if(dogs[i].weight>10){
        sixe ="large";
    }
    console.log("Dog :"+dogs[i].name+"is  a"+ sixe+""+ dogs[i].bread);
}

//Method into constructor as well
function Dog(name,bread,weight){
    this.name = name;
    this.bread = bread;
    this.weight = weight;
    this.bark =function(){
        if(this.weight>25){
            alert(this.name+"says woof")
        }else{
            alert(this.name+"Says Yip")
        }
    }
}
var fido = new Dog("fido","Mixed",38)
var fluffy = new Dog("Fluffy",'poodie',30);
var spot = new Dog("Spot",'Chihuaha',10);
var dogs=[fido,spot,fluffy,];

for(var i=0;i<dogs.length;i++){
    dogs[i].bark()
}

function Car(make, model, year, color, passengers, convertiable, mileage) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.passengers = passengers;
  this.convertiable = convertiable;
  this.mileage = mileage;
  this.started = false;
  this.start = function(){
      this.started = true;
  }
}
var chevy = new Car("chevy", "Bel Air", "1957", "red", 2, false, 1021);
var cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);
var taxi = new Car("Webvile Motors", "Taxi", 1955, "yellow", 4, false, 281341);
var fiat = new Car("Fiat", "500", 1967, "Medium Blue", 2, false, 88000);
var testMe = new Car("Webvile Motors",'Test Car',2014,"marine",2,true,21);
var cars =[chevy,GM,WebvileMotors,fiat,]
for(var i = 0; i < cars.length; i++){
    
}



// instanceof operator;
var cadiParams = {make:"GM",model:"Cadillac",year:1955,color:"tan",passengers:5,convertiable:false,mileage:123567};
var swift = new Car(cadiParams);
if(swift instanceof Car){
    console.log("The swift is designed for you");
}

//Object can own independent properties
// var fido = new Dog("fido",'Mixed',38);
fido.owner = "Ruban";
delete fido.weight;
// we can add new method ;like this
fido.trust = function(person){
    return (person==="Ruban");
}

// Real / = now.getDate();
console.log(theDayOfWeek);

var oddNumbers = new Array(3);
oddNumbers[0] = 1;
oddNumbers[1] =2;
oddNumbers[2] =3;
oddNumbers.reverse()
var astrinng = oddNumbers.join("-")
var areAllOdd = oddNumbers.every((x)=>{
  return ((x%2) !==0)
})
console.log(areAllOdd);