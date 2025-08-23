class user{
    constructor(username , password){
        this.username = username,
        this.password = password,
        Object.defineProperty(this, "password" , {
        get: function (){
            return password.toUpperCase();
        },

        set:function(value){
            return password = value
        }
    });
    }

}
const ahad = new user("ahad" , "abc")

// ahad.set
console.log(ahad.password)