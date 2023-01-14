import React, { useCallback, useState } from 'react'
import Children from './Children'

export default function Parent() {
    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(0)
    const IncrementOne = ()=>{
        setCount(count + 1)
    }
    const fun =useCallback(()=>{
        console.log("adfar")
    },[count2])
  return (
    <div>
        <Children count2 ={count2} fun={fun}/>
        <button onClick={IncrementOne}>click:{count}</button>
    </div>
  )
}
