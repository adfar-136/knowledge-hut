import React, { useReducer } from 'react'
const counterReducer =(state,action)=>{
    console.log("state",state)
    console.log("action",action)
    if (action.type==="Adfar"){
        return{
            count:state.count +1
        }
   
    }
    else if(action.type === "Anwar"){
        return {
            count :state.count -1
        }
    }
   
    return state;
}
export default function UseReducer() {
    //const [state,setState] = useState(0)
    const [state,dispatch] = useReducer(counterReducer,{count:0})
  return (
    <div>
        
        <button onClick={()=>{dispatch({type: 'Adfar'})}}>Add</button>
        <button onClick={()=>{dispatch({type: 'Anwar'})}}>Subtract</button>
        <h1>{state.count}</h1>

    </div>
  )
}
