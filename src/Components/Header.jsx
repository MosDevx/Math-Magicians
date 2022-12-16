import React from 'react'
import {Link} from 'react-router-dom'


export default function Header(){

	return(
		<div className='flex justify-between items-baseline p-10 text-center border'>
			
			<span className='text-4xl'>Math Magicians</span>

			<nav className='flex  text-2xl w-2/6 px-6 justify-between'>
				<Link to={'/home'}  className="border-r-2 border-black pr-6">Home</Link>
				<Link to={'/calculator'} className="border-r-2 border-black pr-6">Calculator</Link>
				<Link to={'/quotes'}>Quotes</Link>
			</nav>
		</div>
	)
}