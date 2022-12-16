import React from 'react';
import Calculator from './Components/Calculator'
import HomePage from './Components/HomePage';
import Header from './Components/Header';
import Quotes from './Components/Quotes';
import ErrorPage from './Components/error-page';
import { Outlet,Navigate,Routes,Route } from 'react-router-dom'


const App=()=>{
  
	return(
		<div>
		<Header />


		<Routes>
			<Route path="/" element={<HomePage/>}/>
			<Route path="/home" element={<HomePage/>}/>
			<Route path="/calculator" element={<Calculator/>}/>
			<Route path="/quotes" element={<Quotes/>}/>

		
		</Routes>
	
		</div>
	)
}

export default App
