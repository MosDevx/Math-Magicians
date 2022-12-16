import {useRouteError} from "react-router-dom"

export default function ErrorPage(){
	const error = useRouteError()
	console.error(error)

	return (

		<div className=" w-full h-[700px] flex flex-col items-center justify-evenly">

			<h1 className="text-6xl color-slate-700 ">Oops!! An error has occured</h1>
			<p className="text-2xl">
        <i>{error.statusText || error.message}</i>
      </p>
		
		</div>

	)
}