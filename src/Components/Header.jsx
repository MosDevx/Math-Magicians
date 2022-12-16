import React from 'react'
import {Link} from 'react-router-dom'


export default function Header(){

	return(
		<div className='flex justify-between items-baseline p-10 text-center border'>
			
			<span className='text-4xl'>Math Magicians</span>

			<nav className='flex  text-3xl'>
				<Link to={'home'}>Home</Link>
				<Link to={'calculator'}>Calculator</Link>
				<Link to={'quote'}>Quote</Link>
			</nav>
		</div>
	)
}