import { useState } from 'react'
import Button from './Button'
import buttons from '../assets/calculatorKeys'
import calculate from '../Logic/calculate'
function Calculator(){


	const [state, setState] = useState({
		obj:{
			total:0,
			next:null,
			operation:0
		},
		runningDisplay:'',
		showResult:false,
	})

// calculate takes in arguments (obj, button-name) // obj = {total,next,operation}
// returns => {total,next,operation}
	const handleChange = (event)=>{
		let pressedButton = event.target.textContent 
		let type = event.target.dataset.type
		
		//if AC or '=' key is pressed running display is made to be empty , then a new sum starts
		let newDisplay = (pressedButton == 'AC'|| pressedButton == '=') ? ' ' :  state.runningDisplay + pressedButton
		
		//if equal key is pressed the div in the render method will display the result instead of the runningDisplay
		let isEqualPressed = pressedButton == "=" ? true : false
		let value ={}
		try{
			 value = calculate(state.obj, pressedButton)
		}catch(err){
			console.log('err caught')
		}
		console.log('after err caught');
		
		//check if the button pressed is an operator and if there was a current total before ...ie user is operating on previous total
		// if true we update the runningDisplay to have the old total plus the new operator
		// if the new button pressed is not an operator.. start a new calculation completely
				if((type == 'operator') && (state.obj.operation == null) && state.obj.total){
			
			newDisplay = state.obj.total + pressedButton
		}
		let newObj = {...state.obj, total:value.total, next:value.next, operation:value.operation||null}
		
		setState({obj:newObj, runningDisplay: newDisplay, showResult:isEqualPressed})

		
	}
			return(
				
			<div className="container m-auto mt-24 h-[500px] w-[500px] bg-blue-200 grid grid-cols-4 grid-rows-6">
				<div className="text-6xl  bg-slate-400 col-span-4 flex justify-end items-center">{state.showResult ? state.obj.total?.substring(0,15) ?? 0 : state.runningDisplay}</div>
				
				
			 {buttons.map((button)=>(

					<Button 
						key = {button.value}
						value= {button.value}
						type={button.type}
						handler={handleChange}
					/>

			 )
			 )}

			</div>

		)

	

}

export default Calculator