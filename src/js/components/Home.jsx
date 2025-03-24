import React from "react";
import { useState } from "react";



//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [tareas, setTareas] = useState([])

	const cambiarTarea = (e)=> {
		setInputValue(e.target.value)
	}

	const agregarTarea = () => {
		setTareas([...tareas, inputValue])
		setInputValue("") //esto esoara limpiar el input

	



	}

	return (
		<div className="d-flex justify-content-center mt-5" style={{height: "400px"}}>
			<div className="bg-body-secondary text-center" style={{ width: "300px" }}>
				<h1 className="text-center mt-5">Hello Rigo!</h1>
				<input type="text" value={inputValue} onChange={cambiarTarea}/>
				<button className="btn-add" onClick={agregarTarea}>Agregar</button>
				<ul>
					{
						tareas.length > 0 ? tareas.map(
							(tarea, index) => {
								return(
									<li key={index} className="border-secondary border-bottom m-1" onClick={null}>{tarea}<button className="m-1">X</button></li>
								)
							})
							: <p>No hay tarea</p>
					}
				</ul>
			</div>
		</div>
	);
};

export default Home;