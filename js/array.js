var scores = [60,50,60,58,54,54,58,50,52,54];
var flavors = ["vanilla","butterscotch","lavender","Chocolate","cookie dough"];
var falvorOfTheDay = flavors[2];
flavors[3] = "Vanilla chocolate chip";
var numFlavors = flavors.length;

function makePharses(){
    var word1 = ["24/7","multi-tier","30,000 foot","B-0to-B","win-win"];
    var word2 = ["empowered","Value-added","oriented","focused","aligned"];
    var word3 = ["process","solution","tipping-point","strtergy","vision"];

    var rand1 = Math.floor(Math.random()*word1.length);
    var rand2 = Math.floor(Math.random()*word2.length)
    var rand3 = Math.floor(Math.random()*word3.length)
    var pharse = word1[rand1]+ "" +word2[rand2]+ "" +word3[rand3];
    // alert(pharse)
}
makePharses()

//how to iterate over an array;

var scores = [
  60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69,
  64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44,
];
var output;
var i=0;
while(i<scores.length){
    output = "Bubble solution" +i+"scores" +scores[i];
    console.log(output);
    i=i+1;
}
for(var i=0; i<scores.length; i=i+1){
        output = "Bubble solution" +i+"scores" +scores[i];

    console.log(output);
}
var products  = ['choo choo chocolate','Icy Mint','Cake Batter','BubbleLegum'];
var hasBubbleGum = [false,false,false,true,];

var i=0;
while(i<products.length){
    if(hasBubbleGum[i]){
        console.log(products[i]+"contains bubble gum");
    }
    i=i+1;
}
for(var i=0;i<scores.length;i++){
    var output = "Bubble solution" + +i+"scores" +scores[i];
    console.log(output);
}
var highScore = "";
for(var i=0;i <scores.length;i++){
    output = "Bubble solution" + +i+"scores" +scores[i];
    console.log(output);
    if(scores[i] >highScore){
        highScore = scores[i]
    }
}
console.log("Bubble tets"+highScore);
console.log("Highest bubble score:"+highScore);


var names = ['apple','banana','curd apple','dragon fruit','echam paaam','figo','cheese'];
var fruits;
for(var i=0;i<names.length;i++){
    if(names[i]==='apple'){
        fruits = 'if there is '+names[i]
        console.log(fruits);
    }
}

var genres = ["80s","90s","Electronic",'folk'];
genres[0] = "Rockabilty";
genres[1] = "Ambient";
var sixe = genres.length;
console.log(sixe);

var bestSolution = [];
for(var i=0;i<scores.length;i++){
    if(scores[i]==highScore){
        bestSolution.push(i)
        console.log("Solutions with the highest score"+bestSolution);
    }
}
console.log("Solutions with the highest score"+bestSolution);

