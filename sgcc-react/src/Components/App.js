import React, { useState, useEffect } from 'react';

import '../Css/App.css';

function App(props) {

  const countData = JSON.parse(localStorage.getItem('count'))
  const [count, setCount] = useState(countData || 0);
  useEffect(() => {
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
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(0)}> Reset Button</button>
      </p>
    </div>
  );
}

// App.defaultProps = {
//   count: 0
// }

export default App;
