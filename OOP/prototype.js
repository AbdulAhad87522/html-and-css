
let myarr = ["spiderman" , "thor"];

let heropowers = {
    spiderman: "slinky",
    thor: "hammer",

    getspidermanpower: function(){
        console.log(`the power of spiderman is ${this.spiderman}`)
    }
}

Object.prototype.ahad = function(){
    console.log(`my name is ahad`)
}

heropowers.ahad();
myarr.ahad()