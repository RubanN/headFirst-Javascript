function pageLoadHandler(){
    alert("welcome to july")
}
window.onload= pageLoadHandler

window.onload= pageLoadHandler;
function pageLoadHandler(){
    alert("welcome to july")
}


window.onload= init();
function init(){
var image = document.getElementById("img");
image.onclick = showAnswer;
}
function showAnswer(){
    var image = document.getElementById("blur");
    image.src = "blurred.jpg"
}

window.onload= init;
function init(){
    var image0 = document.getElementById("one");
    image0.onclick = showImageOne;
    var image1 = document.getElementById("two");
    image1.onclick = showImageTwo; 
}
function showImageOne(){
    var image = document.getElementById("one");
    image.src = "./images/clear.jpg"
}
function showImageTwo(){
    var image = document.getElementById("two");
    image.src = "./images/blur.png"
}

document.getElementsByTagName

function init(){
    var images = document.getElementsByTagName("img");
    for(var i=0; i<images.length; i++){
        images[i].onclick = showImage
    }
}

//SetTimeOut

function myFunction(){
    alert("welcome to programming world")
}
setTimeout(myFunction,5000);


var tick = true;
function ticker(){
    if(tick){
        console.log("Tick!");
        tick = false;
    }else{
        console.log("Tock");
        tick=true;
    }
}
setInterval(ticker,1000)

var addOne = function(x){
    return x+1;
}
var six = addOne(5)

window.onload = function(){
    alert("The page is loaded")
}
