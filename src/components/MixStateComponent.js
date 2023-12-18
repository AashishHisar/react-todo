import React from 'react'
import { useState } from 'react';

const MixStateComponent = () => {

    const [age, setAge] = useState(18);
    const [name, setName] = useState('Example');

    const handleAge = ( ) => {
        setAge(age + 1);
    }
    function handleName(e) {
        setName(e.target.value);
    }
    return (
        <>
            <input value={name} onChange={handleName} />
            <p>Name is :{name} & Age is :{age}</p>
            <button onClick={(e) => handleAge(1)}
                style={{
                    color: 'darkgreen',
                    background: 'orange',
                    margin: '10px'
                }}
            >++ Age</button>
            <button onClick={(e) => handleAge(3)}
            >Direct Age ++3</button>
        </>
    )
}


export default MixStateComponent