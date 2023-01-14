import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decrementCount, incrementCount } from './store/actions/counterAction'

 class Counter extends Component {
  render() {
    const {count, incrementCount, decrementCount} = this.props
    console.log(count)
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={()=>decrementCount()}>-</button>
        <button onClick={()=>incrementCount()}>+</button>
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
    count : state,
})

const mapDispatchToProps = (dispatch)=>({
    decrementCount : ()=>dispatch(decrementCount()),
    incrementCount : ()=> dispatch(incrementCount()),
})

export default connect(mapStateToProps,mapDispatchToProps)(Counter)
