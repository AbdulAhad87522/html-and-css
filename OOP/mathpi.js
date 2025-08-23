const descriptor = Object.getOwnPropertyDescriptor(Math , "PI")
// console.log(descriptor)

const user = {
    name: "chai",
    password:"1223",

    func : function(){
        console.log("chai nhi bani");
    }
}

console.log(Object.getOwnPropertyDescriptor(user , "name"))

Object.defineProperty(user , 'name' , {
    writable: false,
    enumerable: false
})

user.name = "ahad"

console.log(Object.getOwnPropertyDescriptor(user , "name"))


for (let [key,value] of Object.entries(user)) {
    if(typeof value  !== 'function')
    console.log(`${key} , ${value}`)
}

console.log(Object.getOwnPropertyDescriptor(Math.PI))