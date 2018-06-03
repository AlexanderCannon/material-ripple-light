import React, { Component } from 'react'
import Ripple from './Ripple'
import './App.css'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Ripple effect demo</h1>
        <div className='demo'>
          <div>
            <h2>Card</h2>
            <div className='card' onClick={Ripple}></div>
          </div>
          <div>
            <h2>Button</h2>
            <button className='button' onClick={Ripple}>Button</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App
