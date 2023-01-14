import React, { useRef } from 'react'

export default function FuncontrolledComp() {
    const inputRef = useRef()
   function submitHandler(){
    alert(`Name : ${inputRef.current.value}`)
   }
  return (
    <div>
      <h1>Uncontrolled Component</h1>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder='Enter Your Name' ref={inputRef} /><br /><br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
