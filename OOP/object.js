// function multiply(num){
//     this.num = num
//     return num*5
// }

// multiply.power = 2;

// console.log(multiply(3))
// console.log(multiply.power)
// console.log(multiply.prototype)



function user(username , price){
    this.username = username;
    this.price = price;
}

user.prototype.incerment = function(){
   this.price ++;
}

user.prototype.print = function(){
    console.log(`the price of ${this.username} is ${this.price}`)
}

const chai = new user("chai" , 200);
const tea = new user("coffe" , 300);

chai.incerment();
chai.print();