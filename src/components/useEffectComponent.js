import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useEffectComponent = () => {
    
    const [position,setPostion]=useState({x:0,y:0});

    useEffect(()=>{
         function handleMove(e){
            setPostion({ x: e.clientX, y: e.clientY });
         }
         window.addEventListener('pointermove', handleMove);
         
    });

  return (
    <div style={{
        position: 'absolute',
        backgroundColor: 'pink',
        borderRadius: '50%',
        opacity: 0.6,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
      }} />
  )
}

export default useEffectComponent