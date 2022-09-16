import React, { Component } from 'react'
export default class Counter extends Component {
   constructor(props) {

    super(props);
    this.state ={counter:0};
   }
   countUp() {
    this.setState((preState) => {
        return {counter : preState.counter + 1}
        })};
   countDown() {
     this.setState((preState)=>{
        if(preState.counter > 0) {
            return {
                counter: preState.counter - 1
            }
        }
    })
    }
        //  return {counter : preState.counter - 1}})}
  
 
  render() {
    return (
      <div>
        <button onClick={() => this.countUp()}>+</button>
        <button onClick={() => this.countDown()}>-</button>
        <p>{this.state.counter}</p>
      </div>
    )
  }
}
