let x = document.getElementById("a");
x.addEventListener("click",function(){
    x.innerHTML = Math.random()
})

let y = document.getElementById("b");

y.addEventListener("mousemove", function () {
    // Change text color randomly
    y.style.color = getRandomColor();

    // Change background color randomly
    y.style.backgroundColor = getRandomColor();
});


function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


y.addEventListener("mouseleave",function(){
    y.style.color = "black";
    y.style.backgroundColor = "white"
})

let z = document.getElementById("c");
y.addEventListener("click",function(){
    z.style.color = "yellow";
    z.style.backgroundColor = "red"
})

z.addEventListener("click",function(){
    x.style.color = "yellow";
    x.style.backgroundColor = "red"
    x.innerHTML = "changed"
})