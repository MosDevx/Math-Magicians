import React from 'react';
import clsx from 'clsx'


const styles = {
	default: 'text-3xl p-4,  bg-slate-200 justify-center flex items-center border border-slate-300 hover:cursor-pointer hover:bg-slate-100 hover:text-4xl',
	operator: 'bg-orange-400',
	colSpan : 'col-span-2 w-full'
}

class Button extends React.Component{

	constructor(props){
		super(props)
	}

	render(
		//destructer props
	  {value,type,handler} = this.props

	){
		return(
		
			<div data-type={type}  onClick={handler} className={clsx({[styles.default]:true, [styles.operator]:type === 'operator', [styles.colSpan]:value == 0}, )} >
				{value}
			</div>
			
		)
	}
}



export default Button;