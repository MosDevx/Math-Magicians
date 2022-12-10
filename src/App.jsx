import React from 'react';
import { useState } from 'react'
import Calculator from './Components/Calculator'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <Calculator />
    )
  }
}

export default App
