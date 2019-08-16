import React, {useState, useEffect} from 'react';

import './App.css';

function App(props) {
  
    const countData = JSON.parse(localStorage.getItem('count'))
    const[count, setCount] = useState(countData || 0);
    useEffect(()=>{
      localStorage.setItem('count', JSON.stringify(count))

    })

  return (
    <div>
        <p>
          Hello world! 
          This is your SGCC React course
        </p>
        Your count is {count}
        <p>
        <button onClick={()=> setCount(count + 1)}>+1</button>
        <button onClick={()=> setCount(count - 1)}>-1</button>
<<<<<<< HEAD
        <button onClick = {() => setCount(0)}> Reset </button>
=======
        <button onClick = {() => setCount(props.count)}> Reset Button</button>
>>>>>>> 09ce7df3e0247354bab5122c9af8181b26d680ea
      </p>
    </div>
  );
}

// App.defaultProps = {
//   count: 0
// }

export default App;
