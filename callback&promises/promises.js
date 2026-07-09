// let promise = new Promise((resolve, reject) => {
//    let number =2;


//     if( num%2===0){
//         resolve("Order Delivered");
//     }else{
//         reject("Order Cancelled");
//     }
// });
// promise.then((result)=>{
//     console.log(result);
// });
// promise.catch((error)=>{
//     console.log(error);
// });

// let promise = new Promise((resolve,reject)=>{
//     let num =43;
//     if(num>78){
//         setTimeout(()=>{
//             resolve("pass")
//         },2000);
//     }
//     else{
//         setTimeout(()=>{
//             reject("fail");
//         },3000);
//     }

// });
// promise.then((result)=>{
//     console.log(result);
// })
// promise.catch((err)=>{
//     console.log(err);
// });

fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>res.json()).then(data=>console.log(data)).catch(err=>console.log(err));