let x = document.getElementById("one");
let y = document.getElementById("two");
let z = document.getElementById("three");
let a = document.getElementById("four");

y.addEventListener("mouseenter", function(){
    y.innerHTML = Math.floor(Math.random()*100);
})

y.addEventListener("mouseleave", function(){
    y.innerHTML = "2"
})

let clr = "red"
x.addEventListener("mouseenter", function(){
    if(clr == "blue")
    {
        x.style.backgroundColor = "blue";
        clr = "red";
    }
    else
    {
        x.style.backgroundColor = "red";
        clr = "blue";
    }
})

x.addEventListener("mouseleave", function(){
    x.style.backgroundColor = "white"
})  

z.addEventListener("mouseenter",function(){
        r1 = Math.floor(Math.random()*257);
    r2 = Math.floor(Math.random()*257);
    r3 = Math.floor(Math.random()*257);

    z.style.backgroundColor = `rgb(${r1}, ${r2}, ${r3})`;
})


z.addEventListener("mouseleave", function(){
    z.style.backgroundColor = "white"
})  

a.addEventListener("click",function(){
    zr1 = Math.floor(Math.random()*257);
    zr2 = Math.floor(Math.random()*257);
    zr3 = Math.floor(Math.random()*257);

    z.style.backgroundColor = `rgb(${zr1}, ${zr2}, 255)`;

    // yr1 = Math.floor(Math.random()*257);
    // yr2 = Math.floor(Math.random()*257);
    // yr3 = Math.floor(Math.random()*257);

    y.style.backgroundColor = `rgb(255, ${zr2}, ${zr3})`;

    // xr1 = Math.floor(Math.random()*257);
    // xr2 = Math.floor(Math.random()*257);
    // xr3 = Math.floor(Math.random()*257);

    x.style.backgroundColor = `rgb(${zr1}, 255, ${zr3})`;
})

a.addEventListener("mouseleave", function(){
    z.style.backgroundColor = "white"
    y.style.backgroundColor = "white"
    x.style.backgroundColor = "white"
})  
