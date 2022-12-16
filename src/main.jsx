import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import HomePage from './Components/HomePage'

import ErrorPage from './Components/error-page'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './index.css'
import Calculator from './Components/Calculator'


const router = createBrowserRouter([

  {
    path:'/',
    element:<HomePage/>,
    errorElement:<ErrorPage />,
       
    
  },
  {
    path:'calculator',
    element: <Calculator />
  }
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
)
