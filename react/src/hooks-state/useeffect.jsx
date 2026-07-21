import {useState,useEffect} from "react";
function DataFetcher() {
//    useEffect(() => {
//         console.log("Component Rendered");
//     });

//     return <h1>Hello</h1>;

//  console.log("Rendering");

//     useEffect(() => {
//         console.log("Effect");
//     });

//     return <h1>Hello</h1>;

const [count,setCount]=useState(0);
// useEffect(()=>{
// document.title=`Count ${count}`;
// },[count]);
useEffect(()=>{
    console.log("rerendring");
} )
return(
<>
<h1>{count}</h1>

<button
onClick={()=>setCount(count+1)}
>
Increase
</button>
</>
);
}
export default DataFetcher;