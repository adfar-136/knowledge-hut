import { useState } from "react"

const useCounter =()=>{
    const [count, setcount]= useState(0)
    const increment = ()=>{
        setcount(count + 1)
    }
    const decrement = ()=>{
        setcount(count - 1)
    }
    return {
        count : count,
        increment : increment,
        decrement : decrement,
    }
}
export default useCounter