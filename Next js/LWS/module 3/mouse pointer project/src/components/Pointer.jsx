import React, { useState } from 'react'

export default function Pointer() {
    let objectData={x:0,y:0}
 const [position,setPosition]=useState(objectData)
 
//  pointer handler
    const handlePointerMove=(e)=>{
        setPosition({x: e.clientX, y: e.clientY})
    }
  return (
    <>
     <div
    style={{
        position:"relative",
        width:"100vw",
        height:"100vh",
    }}
    onPointerMove={handlePointerMove}
    >
        <div 
        style={{
            position:"absolute",
            top:-10,
            left:-10,
            width:20,
            height:20,
            backgroundColor:"red",
            borderRadius:"50%",
            transform:`translate(${position.x}px,${position.y}px)`,
          
        }}
        >

        </div>
        </div>
    </>
  )
}
