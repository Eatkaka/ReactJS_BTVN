import React from 'react'
import { useState } from 'react';
export default function Ham() {
  const [name,setName]=useState("")
  const [isEnter,setIsEnter]=useState(false)
  const onDelete =()=>{
   setName('');
   setIsEnter(false)

  }
  const handleKeyDown = (e) =>{
    if (e.key === 'Enter') {
     setIsEnter(true);
    }
  }
  const handleChangeName= (e) =>{
    setName(e.target.value);
  }

  
  return (
    <>
     <input value={name} 
     onChange={(e)=>handleChangeName(e)}
      onKeyDown={(e)=>handleKeyDown(e)} />

    {name && isEnter && <p>{name}</p>}
     <button onClick={onDelete}>Delete</button> 
    </>
   
  )
}
