import React from 'react'
import Person from './Person'

export default function List() {

 const persons = [
        {
          id:1,name : 'Adfar',age:30,skill:'react'
        },
        {
            id:2,name : 'Anwar',age:24,skill:'JS'
          },
          {
            id:3,name : 'Mittal',age:25,skill:'HTML'
          },
          {
            id:4,name : 'Sherpa',age:27,skill:'CSS'
          }
    ]
    const personList = persons.map(y=> (
        <Person key={y.id} x={y}/>
    )  )
  return (
    <div>
      {personList}
    </div>
  )
}

