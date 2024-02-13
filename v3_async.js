function createPromises(){
return new Promise(function(resolve, reject){
    setTimeout(function f(){
        console.log("When Ganesh is busy in other work then varsha says, ");
        resolve(10)
        // reject(", They are Loving each Other")
    },3000)
})
}





async function consumer(){
    try{
        console.log("Ganesh Rasure");
        const response = await createPromises();
        console.log("Response is", response);
    }catch(err){
        console.log("Ok, its fine Varsha is here for you",err);
    }
}
consumer();







// async function consume(){
//     try {
//         console.log("Inside Function");
//    const response = await createPromises();
//    console.log("Response is", response);
//     } catch (err) {
//         console.log("Handeled",err);
//     }
// }
// consume();

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
// new promises 

// function newpromise(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function f(){
//             console.log("New Timer Done");
//             resolve(20);
//             // reject(10) 
//         },3000)
//     })    
// }
// async function newconsume(){
//     try{ console.log("New Inside");
//     const response = await newpromise();
//     console.log("response is",response);
//     }
//     catch(er){
//         console.log("HAndeled",er);
//     }
// }
// newconsume();


// function ganesh(){
// }
// return new Promise

// function  newpromisegana(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function f(){
//             console.log("New Code is Done");
//             resolve(28);

//         },3000)
//     })
// }

async function newpromisegana()
{

}