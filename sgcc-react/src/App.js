import React, {useState, useEffect} from 'react';

import './App.css';

function App(props) {

    const[count, setCount] = useState(props.count);
    useEffect(()=>{
      
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
        <button onClick = {() => setCount(props.count)}> Reset Button</button>
      </p>
    </div>
  );
}

App.defaultProps = {
  count: 0
}

export default App;
