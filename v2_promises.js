
function createPromises(){
    return new Promise(function exec(resolve, reject){
        // your code goes here 
        setTimeout(function f(){
            console.log("This is a promise");
            // resolve(10); 
            reject("Done")
        },3000)
    })
    
}


// console.log("Start");
let x = createPromises();
// console.log("Got a New Promise");

x.then(function f(value){
    console.log("Promise Done", value);
}
)
.catch(function g(value){
    console.log("Handeled",value);
})
.finally(function h(){
    console.log("Finally");
})

// console.log("End");

// for ( let i = 0; i <10; i++){
// //     // kuch bhi mhi hai idar
//     console.log("Ganesh");
// }










// function newpromise(){
//     return new Promise(function (resolve,reject)
//     {
//         setTimeout (function f(){
//             console.log("This is a Promises");
//             resolve("I am Resolves");
//         },3000)
//     })
    
// }

// async function consumer(){
// try{
//     console.log("Start");
//     const response = await newpromise()
//     console.log("This is our new Promises", response);
// }
// catch(err){
//     console.log("Handled this errer");
// }
// }
// consumer();
// console.log("End");