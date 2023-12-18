import React from 'react'

function ForButton() {
    function handleClick() {
        alert('You clicked for button components test!');
      }
      return (
        <button onClick={handleClick}>
          Click me
        </button>
      );
}

export default ForButton