let input = document.querySelector("#numbers")
let one = document.getElementById("one")
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four")
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let divide = document.getElementById("divide");
let multiply = document.getElementById("multiply");
let leftbracket = document.getElementById("leftbracket");
let rightbracket = document.getElementById("rightbracket");
let point = document.getElementById("point");
let clear = document.getElementById("clear");
let backspacce = document.getElementById("backspacce");
let equal = document.getElementById("equal");
let answers = document.getElementById("answers");

one.addEventListener("click" ,function(){
    input.value += "1"
})

two.addEventListener("click" ,function(){
    input.value += "2"
})

three.addEventListener("click" ,function(){
    input.value += "3"
})

four.addEventListener("click" ,function(){
    input.value += "4"
})

five.addEventListener("click" ,function(){
    input.value += "5"
})

six.addEventListener("click" ,function(){
    input.value += "6"
})

seven.addEventListener("click" ,function(){
    input.value += "7"
})

eight.addEventListener("click" ,function(){
    input.value += "8"
})

nine.addEventListener("click" ,function(){
    input.value += "9"
})

zero.addEventListener("click" ,function(){
    input.value += "0"
})

plus.addEventListener("click" ,function(){
    input.value += "+"
  livePreview();
})

minus.addEventListener("click" ,function(){
    input.value += "-"
     livePreview();
})

multiply.addEventListener("click" ,function(){
    input.value += "*"
    livePreview();
})

divide.addEventListener("click" ,function(){
    input.value += "/"
     livePreview();
})

leftbracket.addEventListener("click", function(){
    input.value += "("
})

rightbracket.addEventListener("click", function(){
    input.value += ")"
})

point.addEventListener("click", function(){
    input.value += "."
})

clear.addEventListener("click", function(){
    input.value = "";
})

// backspacce.addEventListener("click", function(){
//     let x = input.value;
//     let arr = x.split("");
//     arr.pop();
//     input.value = arr.join("")
// })

backspacce.addEventListener("click", function(){
    input.value =  input.value.slice(0, -1);
})

equal.addEventListener("click", function(){
    try{
        let result = eval(input.value);
        answers.value = result;
    }
    catch{
        answers.value = "error";
    }
})

function livePreview() {
    let exp = input.value;

    // Remove trailing operator before evaluation
    if (/[+\-*/]$/.test(exp)) {
        answers.value = ""; // empty preview if incomplete
        return;
    }

    try {
        let result = eval(exp); // still risky— better to replace later
        answers.value = result;
    } catch {
        answers.value = "error";
    }
}