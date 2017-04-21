var one = document.getElementById("1");
var two = document.getElementById("2");
var mul = document.getElementById("mul");
var add = document.getElementById("add");
var sub = document.getElementById("sub");
var div = document.getElementById("div");
var output = document.getElementById("output");
function calculator (first, second, arithmatic){
    var answer = arithmatic(first, second);
    output.innerHTML = answer;
}
function multiply (a, b){
    return(a * b);
}
function addition (a, b){
    return(a + b);
}
function subtract (a, b){
    return(a - b);
}
function divide (a, b){
    return(a / b);
}
mul.addEventListener("click", function(){
  calculator(one.value, two.value, multiply);
});
add.addEventListener("click", function(){
  calculator(parseInt(one.value), parseInt(two.value), addition);
});
sub.addEventListener("click", function(){
  calculator(one.value, two.value, subtract);
});
div.addEventListener("click", function(){
  calculator(one.value, two.value, divide);
});
