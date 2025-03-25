import React from "react";
import { useState } from "react";



//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [tareas, setTareas] = useState([])
	const [hoverIndex, setHoverIndex] = useState(null);



	const cambiarTarea = (e) => {
		setInputValue(e.target.value)
	}

	const agregarTarea = () => {
		setTareas([...tareas, inputValue])
		setInputValue("") //esto esoara limpiar el input

	}
	const deleteTarea = (index) => {
		const tareaCreada = tareas.filter((tareas, i)=> i !== index)
		setTareas(tareaCreada)
	}


	

	return (
		<div className="d-flex justify-content-center mt-5" style={{ height: "400px" }}>
			<div className="card bg-body-secondary">
				<h1 className="text-center mt-5">Mis tareas</h1>
				<div className="d-flex m-3">
					<input className="form-control" type="text" value={inputValue} onChange={cambiarTarea} />
					<button className="btn btn-success" onClick={agregarTarea}>Agregar</button>
				</div>

				<ul className="list-group list-group-flush">
					{
						tareas.length > 0 ? tareas.map(
							(tarea, index) => {
								return (
									<li 
									key={index} 
									className="list-group-item mx-3 m-1 d-flex justify-content-between" 
									onMouseEnter={() => setHoverIndex(index)}
                                	onMouseLeave={() => setHoverIndex(null)}
									>
										{tarea}{hoverIndex === index && (
										<button 
										className=" bg-danger" 
										onClick={()=> {deleteTarea(index)}}
										>
											<i className="fa-solid fa-trash-can"></i>
										</button>)}
									</li>
								)
							})
							: <p className="list-group-item mx-3 m-1">No hay tareas</p>
					}
				</ul>
			</div>
		</div>
	);
};

export default Home;