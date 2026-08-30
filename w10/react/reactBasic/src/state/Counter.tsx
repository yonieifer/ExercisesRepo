import React from 'react'

const Counter = () => {
    const [count, setCount] = React.useState(0);
        const plus = () => {
            setCount((p) => p + 1);
        };
        const minus = () => {
            setCount((p) => p - 1);
        };
        const reset = () => {
          setCount(0)
        }
    
        return (
            <>
                <h1>{count}</h1>
                <button onClick={plus}>+</button>
                <button onClick={reset}>reset</button>
                <button onClick={minus}>-</button>
            </>
        );
}

export default Counter