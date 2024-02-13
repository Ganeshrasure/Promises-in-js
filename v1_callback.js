function h(x , fu){
   console.log( x*x);
    fu(x*x)

    // h is a HOF higher order function
    // fu is a callback
    
// }
}



h(10, function(){
    console.log("Done With Callback");
})


h(10,  newtype)
function newtype(){
    console.log("This is a new type of Callback");
}



console.log("Start");
setTimeout(function f(){
    console.log("Timer Done 2");
    
},1000)

setTimeout(function f(){
    console.log("This is first Timeout");
    
},0)


console.log("End");

for(let i =0; i <10; i++){
    console.log("This is loop");
}