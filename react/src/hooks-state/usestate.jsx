import { useState } from 'react';

function Counter() {
  
  const [count, setCount] = useState(0);

  // return (
  //   <div>
  //     <p>You clicked {count} times</p>
  //     <button onClick={() => setCount(count + 1)}>
  //       Click me
  //     </button>
  //   </div>
  // );
  return(
        <>
            <h2>{count}</h2>

            <button onClick={() => setCount(count + 1)}>
                increment
            </button>

            <button onClick={() => setCount(count - 1)}>
                decrement
            </button>

            <button onClick={() => setCount(0)}>
                Reset
            </button>
        </>
    );
}
export default Counter;