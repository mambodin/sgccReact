import React,{useEffect,useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';




let  App = (props) => {

  const countData = JSON.parse(localStorage.getItem('count'));
  const [count, setCount] = useState(countData || 0);
  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));

  });

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
};

ReactDOM.render(<App/>, document.getElementById('root'));


