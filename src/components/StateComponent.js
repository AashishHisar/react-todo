import React from 'react'
import { useState } from 'react';

const StateComponent = () => {
    const [counter, setCounter] = useState(1);

    function handleCounterIncrement() {
        setCounter(counter + 1);
    }
    return (
        <button onClick={handleCounterIncrement}>Number of count {counter}</button>
    )
}

export default StateComponent