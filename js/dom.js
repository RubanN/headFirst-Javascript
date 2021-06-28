var access = document.getElementById("code9");
var code = access.innerHTML;
code= code+"Good Night"

var planet = document.getElementById("greenPlanet")
planet.innerHTML = "why is js is difficult";

var hi = document.createElement('h1');
hi.innerHTML="The title of html ";
// console.log(planet.innerHTML);
function init(){
    var plan = document.getElementById("greenPlanet");
    plan.innerHTML="Red Alert : hit by pharse"
}
// console.log(init(plan.innerHTML));
planet.setAttribute("class",'redAlert');
