import "./App.css";
import { useState } from 'react';

function Counter(){
    const [count, setCount] = useState(0);

    const increaseNumber = () =>{
        setCount(count + 1);
    }
    const decreaseNumber = () =>{
        setCount(count - 1);
    }
    const makeNumberZero = () =>{
        setCount(0);
    }

    return(
        <div className="App">
            <button onClick={increaseNumber}>Increase</button>
            <button onClick={decreaseNumber}>Decrease</button>
            <button onClick={makeNumberZero}>Set to Zero</button>
            {count}
        </div>
    )

}

export default Counter;