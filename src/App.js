import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter by={1}></Counter>
        <Counter by={5}></Counter>
        <Counter ></Counter> 
        <Counter by="10"></Counter> 
      </div>
      
    );
  }
  
}








class FirstComp extends Component {
  render() {
    return (
      <div className="FirstComp">
        FirstComponent!!
      </div>
    );
  }
}

  function Footer(){
  return (
    <div className="Footer" >
      All rights reserved
    </div>
  );
}
export default App;
