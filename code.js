// let num = 9876789;
// let original = num;
// let reverse = 0;

// while (num > 0) {
//     let digit = num % 10;
//     reverse = reverse * 10 + digit;
//     num = Math.floor(num / 10);
// }

// if (original === reverse) {
//     console.log(original + " is a Palindrome");
// } else {
//     console.log(original + " is Not a Palindrome");
// }
let age=15;
if (age<=13) {
    console.log("child");
} else if(13<age<19) {
    console.log(" teenager");
}
 else if(19<age<59) {
    console.log(" young");
}else{
    console.log("adult");
}