import React, { Component } from 'react'

export default class ClassComp extends Component {
    constructor(props){
        super(props)
        console.log("Constructor called")
        this.state ={
          count : 0,
        }
      }
      componentDidMount(){
        console.log("Mount Called")
      }
      componentDidUpdate(){
        console.log("Update called")
      }
  render() {
    console.log("render called")
    return (
      <div>
        <button onClick={()=>{this.setState({count : this.state.count + 1})}}>Add : {this.state.count}</button>
      </div>
    )
  }
}
