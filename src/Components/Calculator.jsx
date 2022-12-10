import React from 'react'
import Button from './Button'
import buttons from '../assets/calculatorKeys'

class Calculator extends React.Component {
	constructor(props) {
		super(props)
	}

	
	render(
		
		
		
		){
			
			return(
				
			<div className="container m-auto h-[500px] w-[500px] bg-blue-200 grid grid-cols-4 grid-rows-6">
				<div className="text-6xl bg-slate-400 col-span-4 flex justify-end items-center">0</div>
				
				
			 {buttons.map((button)=>(

					<Button 
						key = {button.value}
						value= {button.value}
						type={button.type}
					/>
					

			 )
			 )}

			</div>

		)

	}

}

export default Calculator