// async function sum(a,b) {
//     return a+b;
// }
// sum(4,5).then(res=>console.log(res)).catch(err=>console.log(err));


// async function sum(pin) {
//      if(pin=1769){
//         return "pass";
//      }else{
//         throw "failed";
//      }
// }
// sum(1769).then(res=>console.log(res)).catch(err=>console.log(err));

// async function displayuser() {
//     console.log("step 1, ");
//     try{
        
//         const user = await getuserdata();
//         console.log("2. User found:", user.name);
//         console.log("3. This prints AFTER the user is found!");
//     } catch (error) {
//         console.log("Error:", error);
//     }
// }

// async function fetchSecureData() {
//     try {
//         const response = await fetch('https://api.example.com/data');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         // If the network fails, or the JSON parsing fails, it goes here
//         console.error("Something went wrong:", error.message);
//     }
// }

// // --- ADD THESE LINES TO RUN THE CODE ---
// displayuser();
// fetchSecureData();