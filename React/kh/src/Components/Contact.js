import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'


export default function Contact() {
  const navigate = useNavigate()
  const goToHome=()=>{
     navigate('/')
  }
  return (
    <div>

      Contact Component <br /><br />
      <button onClick={()=>{navigate(-2)}}>Go To Home</button>
      <Outlet/>
    </div>
  )
}
