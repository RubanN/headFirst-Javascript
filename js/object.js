// What is Object-oriented anyway ?

var car={
    make:"Fiat",
    model:"500",
    year:1957,
    color:"Medium Blue",
    passengers :2,
    convertiable:false,
    mileage:88000,
}
var miles = fiat.mileage;
fiat.mileage = 10000;
console.log(fiat);
if(miles >2000){
    console.log('you can buy');
}
var lookMaNoProps = {};
lookMaNoProps.age=10;
if(lookMaNoProps.age>5){
    console.log("you are too young ");
}
function prequal(car){
    if(car.mileage >10000){
        return false;
    }else if(car.year >1960){
        return false;
    }
    return true;
}
console.log(prequal());

var taxi ={
    make:"Webville Motors",
    model:"Taxi",
    year:1955,
    color:'yellow',
    passengers:2,
    convertiable:false,
    mileage:281341,

}
function prequal(car){
    if(car.mileage >10000){
        return false
    }else if(car.year >1960){
         return false
    }
    return true
}
var worthALook = prequal(taxi);
if(worthALook){
    console.log("You gotta check out this"+taxi.make+""+taxi.model);
}else{
    console.log("You should really pass on the"+taxi.make+""+taxi.model);

}

function makeCar(){
    var makes=['Chevy',"GM",'Fiat',"Webvile Motors","Tucker"];
    var models = ["cadillac","500","Bel-Air","Taxi","Torpedo"];
    var years = [1955,1957,1954,1961];
    var colors = ['red','blue','tan','yellow','white']
    var convertibale = [true,false];

    var rand1 = Math.floor(Math.random()* makes.length);
    var rand2 = Math.floor(Math.random()* models.length);
    var rand3 = Math.floor(Math.random()* years.length);
    var rand4 = Math.floor(Math.random()*colors.length);
    var rand5 = Math.floor(Math.random()*5)+1;
    var rand6 = Math.floor(Math.random()*2);
    var car={
        make:makes[rand1],
        model:models[rand2],
        year:years[rand3],
        colors:colors[rand4],
        passengers:rand5,
        convertibale:convertibale[rand6],
        mileage:0
    }
    return car;

}
function displayCar(car){
    console.log("your new car is a "+ car.year+""+car.make+""+car.model);
}
var carToSell = makeCar();
console.log(displayCar(carToSell));

var fiat = {
    make:'Fiat',
    model:'500',
    year:1957,
    color:"Medium Blue",
    passengers:2,
    convertiable:false,
    mileage:88000,
    drive:function(){
        alert("Zoom Zoom")
    }
}
console.log(fiat.drive());
var fiat = {
    make:'Fiat',
    model:'500',
    year:1957,
    color:"Medium Blue",
    passengers:2,
    convertiable:false,
    mileage:88000,
    started:false,
    start:function(){
       this.started=true;
    },
    stop:function(){
        this.started=false;
    },
    drive:function(){
        if(started){
            console.log("Zoom Zoom");
        }else{
            console.log("You need to start the engine first");
        }
    }

}
console.log(fiat.drive());
console.log(fiat.start());

var fiat={
    make:"Fiat",
    started:false,
    start:function(){
        this.started=true;
    },
    stop:function(){
        this.started=false;
    },
    drive:function(){
        if(this.started){
            alert("Zoom Zoom")
        }else{
            alert("You need to start the engine first");
        }
    }
}
console.log(fiat.drive());

var song={
    name:"Walk this way",
    artist:"Run-D .M.C",
    mintues:4,
    seconds:3,
    genre:"80s",
    playing:false,

    play:function(){
        if(!playing){
            this=true;
            console.log("Playing "+name+ "by"+artist);
        }
    },
    pause:function(){
        if(playing){
            this.playing = false
        }
    }
}
console.log(song.play);