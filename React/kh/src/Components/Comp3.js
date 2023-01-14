import React from 'react'
import { firstName, lastName } from './App'
export default function Comp3() {
  return (
    <div>
      <firstName.Consumer>
        {
            (fname) =>{
                return (
                    <lastName.Consumer>
                        {(lname)=>{
                            return (<h1>my name is {fname} {lname}</h1>)
                        }}
                    </lastName.Consumer>
                )
            }
        }
      </firstName.Consumer>
    </div>
  )
}
