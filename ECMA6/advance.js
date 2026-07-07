// const cube = (x,y,z)=>{return x*y*z};
// console.log(cube(3,4,5));

// function cube1(x){
//     return x*x*x;
// }
// let name = "rishabh";
// let age = 21;
// console.log(`my name is ${name} and my age is ${age}`);

// 
// let arr = [1,2,3,4];
// arr.push(5);
// console.log(arr);
// console.log(arr.length);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift(7);
// console.log(arr);
// let arr2 = [4,5,6];
// let arr3 = arr.concat(arr2);
// console.log(arr3);
// let newarray1 = arr.slice(0,4)
// console.log(newarray1);1,2,3,4
// let newarray2 = arr.splice(0,3,100,200)
// console.log(newarray2);
// console.log(arr);

// let arr = [1,2,3,4];
// let newarray1 = arr.map((nums)=>nums*nums);
// console.log(arr);
// console.log(newarray1);
 
// let arr1 = [10,3,53,54,65,3];
// let newarray2 = arr1.filter((nums)=>nums<50);
// console.log(newarray2);

// let arr3 = [1,5,7,9];
// let result = arr3.reduce((total,num)=>total+num,0);
// console.log(result);

// let arr3 = [1,5,7,9];
// let result = arr3.reduce((total,num)=>total*num,1);
// console.log(result);

// destructring
let arr = [2,4,6,8];
const [x,y,z,w]=arr;
console.log(x,y,z,w);

let obj = {
    name :"rishabh",
    address :{
        state :"up",
        city : "gonda",
        pin:271403
    }
}
const{name,address:{state,city,pin}} = obj;
console.log(name,state);