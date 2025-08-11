let x = document.getElementById("main");
let s = "";

let arr = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgG8d4jIM-FuaastXw3h8IxCc4Be8A18-CBw&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRWZ5AWNBwejH7qrNaM00Vio-oIhSYjUr8Wg&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgI6WTNq9RTW7NuiyMn__a_Z_4IQFRJ2lSg&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtN5q52Od8Wk6fGRlJN9pX-T0xsz0BKIQYQ&s"]
for(let i = 0 ; i <= 50 ; i++)
    {
    let n = Math.floor(Math.random()*arr.length)

    s+= `<div class="cards">
            <img src= ${arr[n]}]>
        </div>`
}
x.innerHTML = s;

