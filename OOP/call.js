function setusername(username){
    this.username = username
    console.log("called")
}

function createuser(username, password){
    setusername.call(this, username)
    this.password = password;
}

const user = new createuser("ahad" , 123)
console.log(user);