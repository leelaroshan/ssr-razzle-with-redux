import React,{useState} from 'react'
import { Link } from 'react-router-dom';

export default function Counter() {
    const [count, setCount] = useState(0)
    const incrementCount = () => {
        setCount(count + 1);
    }
      const decrementCount = () => {
        setCount(count - 1);
      };
    return (
      <div className="counter-div">
        <h2>Counter page</h2>

        <p className="counter-p">{count}</p>
        <div>
          <button onClick={incrementCount}>increment</button>
          <button onClick={decrementCount}>decrement</button>
        </div>

        <Link to="/">home</Link>
      </div>
    );
}
