var x;
if(x==undefined){
    console.log("yes undefined");
}else{
    console.log("value is not initialized");
}
var customer={
    name:"ruban",
    phoneNumber:"",
}
if(customer.phoneNumber ===undefined){
    console.log("yes there is no phone number");
}else{
    console.log('undefined');
}
//Type of operator 
var subject = "Just a string";
var probe =typeof subject;
console.log(probe);
var test10 = null;
console.log(typeof test10);
var header = document.getElementById("header");
if(header==null){
    console.log("okay something seriously wrong");
}else{
    console.log('Error');
}
var weather = document.getElementById("weather");
if(weather !=null){
    console.log('create a content');
}else{
    console.log("There is no weather widget");
}
//NaN
var a = 0/0;
console.log(a);
var b = "Food" *100;
console.log(b);
var c= Math.sqrt(-9);
console.log(c);
var test11 =0/0;
console.log(typeof test11);
if(99=="99"){
    console.log("A number equals a string");
}else{
    console.log("No way a number equals a string");
}
if(1=="1"){
    console.log(true);
}
if(99=="99"){
    console.log(true);
}
if(99==99){
    console.log(true);
}

//falsy

if(99=="vanilla"){
    console.log(true);
}else{
    console.log(false);
}
var test = 99==NaN;
console.log(test);

var boo = true==1;
console.log(boo);
var caom = 1==1;
console.log(caom);

//Comparing null and undefined
var add = 3+"4";
console.log(add);     //javascript converts the number to string
var mul = 3*"4";
console.log(mul);
var divi = 80/'10';
console.log(divi);
var mini = '10'-5;
console.log(mini);
var order = (1+2) + "pixxa";
console.log(order);
var order1 = 1+(2+"kf")
console.log(order1);

var input ="ruban8801@gmail.com";
for(var i =0;i<input.length;i++){
    if(input.charAt(i)==="@"){
        console.log("There is an @ sign at index " + i);
    }
}
//indexOf Method
var pharse  = "the car in the car";
var index= pharse.indexOf('car');
console.log("there is cat sitting at index"+index);
index.pharse.indexOf('the',5)
console.log("there is cat sitting at index"+index);
index.pharse.indexOf("dog");
console.log("there is cat sitting at the index"+index); //-1  when there is no value in the string

// subString Method Two indics extract and return the string

var data = "name|phone|address";
var val = data.substring(5,10);
console.log("Substring is " + val);
val = data.substring(5);
console.log(val);

//The split Method 
var data = "name|phone|address";
var val = data.split("|");
console.log("Split array is"+val);

//Phone Number
var phoneNumber = "123-4567"
function validate(phoneNumber){
    if(phoneNumber.length !==8){
        return false;
    }
    for(var i=0; i<phoneNumber.length; i++){
        if(i===3){
            if(phoneNumber.charAt(i) !=='-'){
                return false;
            }
        }else if(isNaN(phoneNumber.charAt(i))){
            return false;
        }
    }
    return true
}
console.log(validate("123-4567"));

//Another way of finding phone number

function validatee(phoneNumber){
    if(phoneNumber.length !==8){
              return false;
    }
    var first = phoneNumber.substring(0,3);
    var second = phoneNumber.substring(4);
    if(phoneNumber.charAt(3) !== "-" || isNaN(first) || isNaN(second)){
        return false;
    }
    return true
}
console.log(validatee("123-4567"));

function validation(phoneNumber){
    if(phoneNumber.length >8 || phoneNumber.length<7){
        return false;
    }
    for(var i=0; i<phoneNumber.length; i++){
        if(i===3){
            if(phoneNumber.length ===8 && phoneNumber.charAt(i) !== "-"){
                return false;
            }else if(phoneNumber.length ===7 && isNaN(phoneNumber.charAt(i))){
                return false;
            }
        }else if(isNaN(phoneNumber.charAt(i))){
            return false;
        }
    }
    return true
}
