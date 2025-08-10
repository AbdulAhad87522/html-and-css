// function prod(a,b,c)
// {
//     return a*b*c;
// }

// // console.log(prod(1,2,3))
// function minus(product , y)
// {
//     let a = product(1,2,3);
//     console.log(a-y);
// }
// function he()
// {
//     minus(prod,7);
// }
// setTimeout(he,0*1000);

// function hello()
// {
//     console.log("hello");
// }

// // setTimeout(hello,2*1000);

// // function iterartion()
// // {
// //     for(let i = 0 ; i < 10 ; i++)
// //     {
// //         console.log(i);

// //     }
// // }

// // setTimeout(iterartion, 2*1000);


// function print(i)
// {
//     console.log(i);
// }

// function ans()
// {
//      for(let i = 0 ; i < 10 ; i++)
//     {
//         console.log(i)

//     }
// }


//     setTimeout(ans,2*1000);


// for(let i = 0 ; i < 10 ; i++)
// {
//     setTimeout(function(){
//         console.log(i)
//     },i*1000)
// } 

for(let i = 0 ; i < 10 ; i ++)
{
    setTimeout(function(){
        console.log(Math.random()*11 )
    },(i*1000)) 
}