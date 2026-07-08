// A callback is a function that is passed as an argument to another function and is executed later when a specific task is completed.
// function greet(name, callback){
//     console.log("hello "+name);
//     callback();
// }
// function role(){
//     console.log("i am student");
// }
// greet("rishabh",role); 


// function condition(marks,callback){
//     if(marks<17){
//         callback("fail");
//     }else{
//         callback("pass");
//     }
// }
// function resultcheck(result){
//     console.log("result:",result);
// }
// condition(19,resultcheck);

// Asynchrnous callback

// An asynchronous callback is a callback function that does not execute immediately. Instead, it runs later, after an asynchronous task (such as a timer, file read, or API request) has completed.

console.log("Start");

setTimeout(()=> {
    console.log("Inside Callback");
}, 2000);

console.log("End");