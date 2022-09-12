import React, { Component } from "react";
import PropTypes  from 'prop-types';
import "./Counter.css"

  class Counter extends Component{

    constructor(){
        super(); //call super to use 'this'
        this.state={
            counter :0
        }

        //binding the incerment method to the class 
        this.increment = this.increment.bind(this);
    }
    render(){
        return (
      <div className="Counter" >
        <button onClick={this.increment}>+{this.props.by}</button>
        <span className="count">{this.state.counter}</span>
        <br/>
        <span style={{fontSize:"10px",color:"red"}}>Checking Style</span>
      </div>
    );
  }


  increment(){
    console.log('increment');
    //this.state.counter++; not a good practce
    this.setState(  //set the state object with the new value
        {
            counter :this.state.counter + (this.props.by)
        }
    );
  }
}

Counter.defaultProps = {
  by : 1
}

Counter.propTypes = {
  by : PropTypes.number
}

export default Counter