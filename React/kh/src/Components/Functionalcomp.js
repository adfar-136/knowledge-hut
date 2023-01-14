import React, { useEffect, useState } from 'react'

export default function Functionalcomp() {
   const [count,SetCount] = useState(0)
   const [count1,SetCount1] = useState(0)

   useEffect(()=>{
     
      const eventHandler =()=>console.log("hi")
      document.addEventListener('click',eventHandler)
      return ()=>{
        
        document.removeEventListener('click',eventHandler)
      }
},[count])



  return (
    <div>
        <button onClick={()=>{SetCount(count+1)}}>Add : {count}</button>
        
    </div>
  )
}
