import {useState} from "react";
import classes from './Counter.module.scss';

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div className={classes.button}>
            <button onClick={() => {setCount(count + 1)}}>+</button>
            <div>{count}</div>
            <button onClick={() => {setCount(count - 1)}}>-</button>
        </div>
    );
};

export default Counter;