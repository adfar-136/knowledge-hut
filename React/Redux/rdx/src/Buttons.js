import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from './State/Index'
import { depositMoney, withdrawMoney } from './State/action-creators'
import { bindActionCreators } from 'redux'
export default function Buttons() {
  
    const dispatch = useDispatch()
    const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators,dispatch)
  return (
    <div>
      <h1>Deposit/Withdraw Money</h1>
      <button onClick={()=>{depositMoney(100)}}>+</button>
      <button onClick={()=>{depositMoney(10000)}}>+</button>
      <button onClick={()=>{withdrawMoney(100)}}>-</button>
      <button onClick={()=>{withdrawMoney(100000)}}>-</button>

    </div>
  )
}
