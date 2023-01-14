import React, { Component } from 'react'

export default class ControlledComp extends Component {
    constructor(){
        super()
        this.state = {
            name:"",
            password:"",
        }
    }
    Submit(){
        console.log(this.state)
    }
  render() {
    return (
      <div>
        <h1>Controlled Component</h1>
        <input onChange={(event)=>{this.setState({name:event.target.value})}} type="text" placeholder='Enter Your Name'/><br /><br />
        <input onChange={(event)=>{this.setState({password:event.target.value})}} type="password" placeholder='Enter password'/>
        <button onClick={()=>{this.Submit()}}>Submit</button>     
      </div>
    )
  }
}
