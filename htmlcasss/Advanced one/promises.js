// const   promiseone = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task")
//         resolve();
//     },1000)
// })

// promiseone.then(function(){
//     console.log("Prommise completed")
// })


// new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log("async task 2")
//     } , 1000)
//     resolve();
// }).then(function(){
//     console.log("async 2 completed")
// })


// const promisethree = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log("task 3 ")
//         resolve(['ahad', 'waleeed'])
//     },1000)
// })

// promisethree.then(function(usr){
//     console.log(usr[0])
//     console.log("task 3 completted")
// })

const promisefour = new Promise(function(resolve , reject){
    let error = false;
    if(!error){
        resolve({username: "ahad" , password: "1234"})
    }
    else{
        reject('something is wrong')
    }
})

promisefour.then(function(str){
    console.log(str)
   return  str.username;
})
.then((srt) => {
    console.log(srt)
})
.catch(function(str){
    console.log(str)
    console.log("reject executed")
})
.finally(function(){
    console.log("finaaly")
})

const promisefive = new promise(function(resolve, reject){
    let error = true;
    if(!error){
        resolve({username:"Javascript" , password:"0987"})
    }
    else{
        reject("js error ")
    }   
})

promisefive.then()