import React, { useContext } from 'react'
import Comp3 from './Comp3'
import { firstName, lastName } from './App'
export default function Comp2() {
    const fname = useContext(firstName)
    const lname = useContext(lastName)
  return (
    <div>
      <h1>My name is {fname} {lname}</h1>
    </div>
  )
}
