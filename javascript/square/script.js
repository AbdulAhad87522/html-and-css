let x = document.getElementById("one");
let y = document.getElementById("two");
let z = document.getElementById("three");
let a = document.getElementById("four");

y.addEventListener("mouseenter", function(){
    y.innerHTML = Math.floor(Math.random()*100);
})

y.addEventListener("dblclick", function(){
 zr1 = Math.floor(Math.random()*257);
    zr2 = Math.floor(Math.random()*257);
    zr3 = Math.floor(Math.random()*257);

    y.style.backgroundColor = `rgb(${zr1}, ${zr2}, 255)`;})

y.addEventListener("mouseleave", function(){
    y.innerHTML = "2"
    // y.style.backgroundColor = "white"
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
    y.style.backgroundColor = `rgb(255, ${zr2}, ${zr3})`;
    x.style.backgroundColor = `rgb(${zr1}, 255, ${zr3})`;
})

a.addEventListener("mouseleave", function(){
    z.style.backgroundColor = "white"
    y.style.backgroundColor = "white"
    x.style.backgroundColor = "white"
})  

let main = document.getElementById("main")
let crsr = document.getElementById("circle");
main.addEventListener("mousemove", function(details){
    crsr.style.left = details.x +"px";
    crsr.style.top = details.y +"px";
})