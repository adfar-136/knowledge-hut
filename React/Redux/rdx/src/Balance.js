import React from 'react'
import { useSelector } from 'react-redux'

export default function Balance() {
    const amount = useSelector(state=>state.amount)
  return (
    <div>
      <button>Your Balance :{amount}</button>
    </div>
  )
}
