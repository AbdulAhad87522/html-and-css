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

// plus.addEventListener("click" ,function(){
//     input.value += "+"
//   livePreview();
// })

// plus.addEventListener("click", function(){
//     answers.value = addNumbers(input.value);
//     input.value += "+";
// });


plus.addEventListener("click", function(){
    answers.value = calculation(input.value);
    input.value += "+";
});


// minus.addEventListener("click" ,function(){
//     input.value += "-"
//      livePreview();
// })

// minus.addEventListener("click",function(){
//     answers.value = minusnumbers(input.value);
//     input.value += "-"
// })

minus.addEventListener("click",function(){
    answers.value = calculation(input.value);
    input.value += "-"
})

// multiply.addEventListener("click" ,function(){
//     input.value += "*"
//     livePreview();
// })

multiply.addEventListener("click",function(){
    answers.value = calculation(input.value);
    input.value += "*"
})

// divide.addEventListener("click" ,function(){
//     input.value += "/"
//      livePreview();
// })

divide.addEventListener("click",function(){
    answers.value = calculation(input.value);
    input.value += "/"
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
    answers.value = "";
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

function addNumbers(expression) {
    let number = 0;      // current number being read
    let total = 0;       // running sum

    for (let i = 0; i < expression.length; i++) {
        let ch = expression[i];

        // if it's a digit
        if (ch >= '0' && ch <= '9') {
            number = number * 10 + (ch - '0'); // build the number
        }

        // if it's a plus sign
        else if (ch === '+') {
            total = total + number; // add current number to total
            number = 0; // reset number
        }
    }

    // add last number after loop ends
    total = total + number;

    return total;
}


function minusnumbers(expression){
    let number = 0;
    let total = 0;
    let isfirstnumber = true;
    for(let i = 0 ; i < expression.length ; i++)
    {
        let ch = expression[i];
        if(ch > '0' && ch < '9')
        {
            number = number * 10 -(ch -'0')
        }

        else if(ch === '-')
        {
            if(isfirstnumber)
            {
                total = number;
                isfirstnumber = false;
            }
            else
            {
            total = total - number;
        }         
        number = 0;   
        }
    }
    if(isfirstnumber)
    {
        total = number;
    }
    else
    {
        total = total - number;
    }
    return total;
}

// function calculation(expression)
// {
//     let numbers = 0;
//     let total = 0;
//     let firstnumber = true;
//     for(let i= 0 ; i < expression.length ; i++)
//     {
//         let ch = expression[i];
//         if(ch > '0' && ch <= '9')
//         {
//             numbers = (numbers * 10) + (ch - '0')
//         }
//         else
//         {
//             if(ch === '+')
//             {
//                 if(firstnumber)
//                 {
//                     total = numbers;
//                     firstnumber = false;
//                 }
//                 else{
//                 total = total + numbers;}
//             }
//             else if(ch === '-')
//             {
//                 if(firstnumber)
//                 {
//                     total = numbers;
//                     firstnumber = false;
//                 }
//                 else
//                 {
//                 total = total - numbers;}
//             }
//             else if(ch === '*')
//             {
//                 if(firstnumber)
//                 {
//                     total = numbers;
//                     firstnumber = false;
//                 }
//                 else
//                 {
//                     total = total * numbers;
//                 }
//             }
//             else if(ch === '/')
//             {
//                 if(firstnumber)
//                 {
//                     total = numbers;
//                     firstnumber = false;
//                 }
//                 else
//                 {
//                     total = total / numbers;
//                 }
//             }
//             numbers = 0
//         }
//     }
//      if(isfirstnumber)
//     {
//         total = numbers;
//     }
//     else
//     {
//         total = total - numbers;
//     }
//     return total;
// }

// function calculation(expression) {
//     let numbers = 0;
//     let total = 0;
//     let firstnumber = true;
//     let currentOp = '+'; // Start assuming we add first number

//     for (let i = 0; i < expression.length; i++) {
//         let ch = expression[i];

//         // Build the number
//         if (ch >= '0' && ch <= '9') {
//             numbers = (numbers * 10) + (ch - '0');
//         }
//         // If it's an operator or end of expression
//         if (ch === '+' || ch === '-' || ch === '*' || ch === '/' || i === expression.length - 1) {
            
//             // If last character is digit, we still process the number
//             if (i === expression.length - 1 && ch >= '0' && ch <= '9') {
//                 // do nothing special, number already built
//             }

//             if (firstnumber) {
//                 total = numbers;
//                 firstnumber = false;
//             } else {
//                 if (currentOp === '+') total = total + numbers;
//                 else if (currentOp === '-') total = total - numbers;
//                 else if (currentOp === '*') total = total * numbers;
//                 else if (currentOp === '/') total = total / numbers;
//             }

//             currentOp = ch; // remember current operator
//             numbers = 0; // reset number builder
//         }
//     }

//     return total;
// }


function calculation(expression) {
  if (!expression) return 0;

  let total = 0;        // running result
  let num = 0;          // number being built
  let op = '+';         // pending operator (apply op to num)
  let isDecimal = false;
  let decDiv = 1;       // decimal divisor (10,100, ...)

  for (let i = 0; i < expression.length; i++) {
    let ch = expression[i];

    // build digit (0-9)
    if (ch >= '0' && ch <= '9') {
      let digit = ch.charCodeAt(0) - 48;
      if (!isDecimal) {
        num = num * 10 + digit;
      } else {
        decDiv *= 10;
        num = num + digit / decDiv;
      }
    }
    // decimal point
    else if (ch === '.') {
      if (!isDecimal) {
        isDecimal = true;
        decDiv = 1;
      }
      // if multiple dots appear, ignore extras
    }
    // operator encountered -> apply pending op, reset num
    else if (ch === '+' || ch === '-' || ch === '*' || ch === '/') {
      if (op === '+') total = total + num;
      else if (op === '-') total = total - num;
      else if (op === '*') total = total * num;
      else if (op === '/') total = total / num;

      // set new operator and reset for next number
      op = ch;
      num = 0;
      isDecimal = false;
      decDiv = 1;
    }
    // ignore any other characters (or you can return error)
  }

  // apply last pending number
  if (op === '+') total = total + num;
  else if (op === '-') total = total - num;
  else if (op === '*') total = total * num;
  else if (op === '/') total = total / num;

  return total;
}
