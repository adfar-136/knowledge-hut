import React, { Component } from 'react'

export default class UncontrolledComp extends Component {
    constructor(){
        super()
        this.name = React.createRef()
        this.password = React.createRef()
        this.email = React.createRef()
    }
    submitHandler(event){
       
        event.preventDefault();
        console.log(this.name.current.value , this.password.current.value)
    }
  render() {
    return (
      <div>
        <h1>Uncontrolled Component</h1>
        <form onSubmit={(event)=>{this.submitHandler(event)}}>
            <input type="text" placeholder='Enter Your Name' ref={this.name} /><br /><br />
            <input type="password" placeholder='Enter password' ref={this.password}/> <br /><br />
            <input type="email" placeholder='Enter email' ref={this.email} /> <br /><br />

            <button type='submit'>Submit</button>
        </form>
        

      </div>
    )
  }
}
