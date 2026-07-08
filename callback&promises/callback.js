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

// console.log("Start");

// setTimeout(()=> {
//     console.log("Inside Callback");
// }, 2000);

// console.log("End");
 // callback hell
//  setTimeout(()=>{
//     console.log("task 1");
//     setTimeout(()=>{
//         console.log("task 2");
        
//     },5000);
//  },3000);
//  setTimeout(()=>{
//             console.log("complete,task 4")
//         },1000);

// example of callback hell

// function order(callback){
//     setTimeout(()=>{ 
//         console.log("order reciever");
//         callback();
//     },2000);
// }
// function prepare(callback){
//     setTimeout(()=>{
//         console.log("resaturent preparing food");
//         callback();
//     },2000);
// }
// function packed(callback){
//     setTimeout(()=>{
//         console.log("food packed");
//         callback();
//     },2000);
// }
// order(()=>{
//  prepare(()=>{
//     packed(() =>{
//         console.log("order is ready for delivery");
//     });
//  });
// });