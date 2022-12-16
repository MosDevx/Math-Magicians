import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import HomePage from './Components/HomePage'

import ErrorPage from './Components/error-page'
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from 'react-router-dom';
import './index.css'
import Calculator from './Components/Calculator'


const router = createBrowserRouter([

  {
    path:'/',
    element:<App/>,
    errorElement:<ErrorPage />,
    children:[
      {
        path:'calculator',
        element: <Calculator />
      },

      {
        path:'home',
        element: <HomePage />
      },  
      // {
      //   path:'calculator',
      //   element: <Calculator />
      // }
    ]
  }
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* <RouterProvider router={router}/> */}
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  </React.StrictMode>
)
