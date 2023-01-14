import React, { useMemo, useState } from 'react'

export default function UseMemo() {
    const [countOne,setCounterOne] = useState(0)
    const [countTwo,setCounterTwo] = useState(0)
const IncrementOne =()=>{
  setCounterOne(countOne + 1)
}
const IncrementTwo =()=>{
    setCounterTwo(countTwo + 1)
}
const isEven =useMemo(()=>{
    console.log("Adfar")
    let i = 0;
    while(i<2000000000) i++
    return countOne % 2 === 0

},[countOne])

  return (
    <div>
        <button onClick={IncrementOne}>Counter :{countOne} </button>
        <br /><br />
        <span>{isEven?"Even":"Odd"}</span>
        <br /><br />
        <button onClick={IncrementTwo}>Counter :{countTwo}</button>
    </div>
  )
}
