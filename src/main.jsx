import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Calculator from './Components/Calculator'
import Button from './Components/Button'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Calculator />
    {/* <Button number={2} type={'operator'}/> */}
  </React.StrictMode>
)
