import React from 'react'

export default function Person({x,key}) {
  return (
    <div>
        
      <h2> {x.id}I am {x.name}, i am {x.age} years old. My skill is {x.skill}</h2>
    </div>
  )
}
