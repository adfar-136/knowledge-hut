import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {counter : 0}
        
    }
    handleclick=()=>{
        this.setState(({counter})=>({
            counter:counter+1
        }))
    }
  render() {
    if (this.state.counter === 10){
        throw new Error("Crashed else")
    }
    return <h1 onClick={this.handleclick}>{this.state.counter}</h1>
  }
}
