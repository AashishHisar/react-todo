import React from 'react'
import { useState } from 'react';

function InputTestComponent() {
    const [inputValue, setInputValue] = useState('Hello');

    function changeInputValue(e) {
        setInputValue(e.target.value);
    }
    return (
        <>
            <input value={inputValue} onChange={changeInputValue} />
            <p>You typed value: {inputValue}</p>
            <button onClick={() => setInputValue('Hello')}>Reset the value of input field</button>
        </>

    )
}

export default InputTestComponent