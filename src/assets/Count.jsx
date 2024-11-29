import { useState } from "react";

function Count(){
    const[count,setCount]=useState();
    function handleIncrement(){
        setCount(c=>c+1);
        setCount(c=>c+1);
        setCount(c=>c+1);
    }
    function handleReset(){
        setCount(0);
    }
    function handleDecrement(){
        setCount(c=>c-1);
        setCount(c=>c-1);
        setCount(c=>c-1);
    }
    return(
        <>
        <h1>count:{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrement}>Decrement</button>
        </>
    )
}
export default Count;