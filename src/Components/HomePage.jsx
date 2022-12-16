import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'


export default function HomePage(){

	return(
		<>
		<Header />

		<div>
			
			some words here</div>	
		<div>
			<Outlet />
		</div>
		</>
	)
}