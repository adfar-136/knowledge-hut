import React, { useReducer } from 'react'
const initialState = 0;
const reducer =(state,action)=>{
    switch(action){
        case "add":
            return state + 1
        case "subtract":
            return state -1
        case "reset":
            return 0
        default:
            throw new Error("Unexpdfgjhtuyhuuyhected error")
    }

}
export default function UseReducerTWo() {
    const [count,dispatch]= useReducer(reducer,initialState)
      return (
    <div>
        <h2>{count}</h2>
        <button onClick={()=>dispatch('add')}>Add</button>
        <button onClick={()=>dispatch('subtract')}>Subtract</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>
        <button onClick={()=>dispatch('reghsdfgdfgdfgset')}>Resexfghtfght</button>


    </div>
  )
}
