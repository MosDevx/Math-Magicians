import React from 'react'
import Button from './Button'
import buttons from '../assets/calculatorKeys'
import calculate from '../Logic/calculate'
class Calculator extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			obj:{
				total:0,
				next:null,
				operation:0
			},
			runningDisplay:'',
			showResult:false,
		}
		this.handleChange = this.handleChange.bind(this)
	}


// calculate takes in arguments (obj, button-name) // obj = {total,next,operation}
// returns => {total,next,operation}
	handleChange = (event)=>{
		let pressedButton = event.target.textContent 
		let type = event.target.dataset.type
		
		//if AC or '=' key is pressed running display is made to be empty , then a new sum starts
		let newDisplay = (pressedButton == 'AC'|| pressedButton == '=') ? ' ' :  this.state.runningDisplay + pressedButton
		
		//if equal key is pressed the div in the render method will display the result instead of the runningDisplay
		let isEqualPressed = pressedButton == "=" ? true : false
		
		let value = calculate(this.state.obj, pressedButton)
		
		//check if the button pressed is an operator and if there was a current total before ...ie user is operating on previous total
		// if true we update the runningDisplay to have the old total plus the new operator
		// if the new button pressed is not an operator.. start a new calculation completely
				if((type == 'operator') && (this.state.obj.operation == null) && this.state.obj.total){
			console.log('fired');
			newDisplay = this.state.obj.total + pressedButton
		}
		let newObj = {...this.state.obj, total:value.total, next:value.next, operation:value.operation||null}
		
		this.setState({obj:newObj, runningDisplay: newDisplay, showResult:isEqualPressed})

		
	}


	
	render(
		
		){
			
			return(
				
			<div className="container m-auto h-[500px] w-[500px] bg-blue-200 grid grid-cols-4 grid-rows-6">
				<div className="text-6xl  bg-slate-400 col-span-4 flex justify-end items-center">{this.state.showResult ? this.state.obj.total?.substring(0,15) ?? 0 : this.state.runningDisplay}</div>
				
				
			 {buttons.map((button)=>(

					<Button 
						key = {button.value}
						value= {button.value}
						type={button.type}
						handler={this.handleChange}
					/>

			 )
			 )}

			</div>

		)

	}

}

export default Calculator