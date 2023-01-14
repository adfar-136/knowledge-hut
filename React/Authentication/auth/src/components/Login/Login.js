import React, { useState } from 'react'
import styles from './login.module.css'
import Inputform from '../InputForm/Inputform'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email:"",
    pass:""
  })
  
  const [submitButtonDisabled,setsubmitButtonDisabled] = useState(false)

  const [errorMsg, setErrorMsg]=useState("")
  const handleSubmission=()=>{
    if(!values.email || !values.pass){
      setErrorMsg("fill all fields")
      return;
    }
    setErrorMsg("")
    setsubmitButtonDisabled(true)
    signInWithEmailAndPassword(auth,values.email,values.pass).then((res)=>{
      setsubmitButtonDisabled(false)
      navigate('/')
    })
    .catch((err)=>{
      setsubmitButtonDisabled(false)
      setErrorMsg(err.message)
    })

  }
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
      <Inputform type='email' label="Email" placeholder="Enter your email" 
        onChange={(event)=> 
        setValues((prev)=>({...prev,email:event.target.value}))
        }/>
        <Inputform type='password' label="password" placeholder="Enter your password" 
        onChange={(event)=>
        setValues((prev)=>({...prev,pass:event.target.value}))
        }/>
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>Login</button>
          <p>Already have an account? {" "} 
            <span>
                <Link to="/signup">signup</Link>
            </span>
            </p>
        </div>
 
      </div>
      
    </div>
  )
}
