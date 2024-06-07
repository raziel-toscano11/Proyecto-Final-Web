import Entrada from "./Entrada/Entrada";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Entradas = () => {

	const navigate = useNavigate();
	const [entradas, setEntradas] = useState([]);

	const crearHilo = (event) => {
        navigate('/crear-entrada');
    }

	useEffect(() => {
		
		axios.get('/posts')
			.then(response => {
				setEntradas(response.data);
			})
			.catch(error => {
				console.error('Error al obtener las entradas:', error);
			});
	}, []);

	const [currentPage, setCurrentPage] = useState(1);
	const entriesPerPage = 4; //

	// Calcular las entradas a mostrar en función de la página actual
	const indexOfLastEntry = currentPage * entriesPerPage;
	const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
	const entriesToShow = entradas.slice(indexOfFirstEntry, indexOfLastEntry);

	// Funciones para cambiar de página
	const goToPrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const goToNextPage = () => {
		if (indexOfLastEntry < entradas.length) {
			setCurrentPage(currentPage + 1);
		}
	};

	// Función para formatear la fecha
	function formatDate(dateString) {
		const date = new Date(dateString);
		const day = date.getDate();
		const month = date.getMonth() + 1; // Los meses son base 0
		const year = date.getFullYear();
		return `${day}/${month}/${year}`;
	}
	//Funcion para recortar el contenido a mostrar
	const MAX_CONTENT_LENGTH = 160//Longitud máxima del contenido
	function truncateContent(content) {
		if (content.length <= MAX_CONTENT_LENGTH) {
			return content;
		} else {
			const truncatedContent = content.substring(0, MAX_CONTENT_LENGTH).trim();
			return `${truncatedContent}...`;
		}
	}


	return (
		<div className="bg-gray-800 p-8 rounded-md w-full">
			<div className=" flex items-center justify-between pb-6">
				<div>
					<h2 className="text-white font-semibold">¡Bienvenido al Foro!</h2>
					<span className="text-xs text-white">Aqui puedes contar tus experiencias</span>
				</div>
				<div className="flex items-center justify-between">
					<div className="flex bg-gray-50 items-center p-2 rounded-md">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
							fill="currentColor">
							<path fillRule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								clipRule="evenodd" />
						</svg>
						<input className="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search..." />
					</div>
					<div className="lg:ml-40 ml-10 space-x-8">
						<button onClick={crearHilo} className="bg-blue-700 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Crear Hilo</button>
						
					</div>
				</div>
			</div>
			<div>
				<div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
					<div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
						<table className="min-w-full leading-normal">
							<thead>
								<tr>
									<th
										className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-black uppercase tracking-wider">
										Nombre del hilo
									</th>
									<th
										className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-black uppercase tracking-wider">
										Autor
									</th>
									<th
										className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-black uppercase tracking-wider">
										Fecha de creacion
									</th>
									<th
										className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-black uppercase tracking-wider">
										Vista previa
									</th>
									<th
										className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-black uppercase tracking-wider">
										Ver
									</th>
								</tr>
							</thead>
							<tbody>
								{
									entriesToShow.map(entrada => (
										<Entrada
											titulo={entrada.titulo}
											autor={entrada.user.name}
											creacion={formatDate(entrada.created_at)}
											contenido={truncateContent(entrada.contenido)}
											id={entrada.id}
										/>
									))
								}
							</tbody>
						</table>
						<div
							className="px-5 py-5 bg-gray-200 border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
							<span className="text-xs xs:text-sm text-gray-900">
								Mostrando {indexOfFirstEntry + 1} a {Math.min(indexOfLastEntry, entradas.length)} de {entradas.length} entradas
							</span>
							<div className="inline-flex mt-2 xs:mt-0">
								<button onClick={goToPrevPage} className="text-sm text-indigo-50 transition duration-150 hover:bg-blue-600 bg-blue-700 font-semibold py-2 px-4 rounded-l">
									Prev
								</button>
								&nbsp; &nbsp;
								<button onClick={goToNextPage} className="text-sm text-indigo-50 transition duration-150 hover:bg-blue-600 bg-blue-700 font-semibold py-2 px-4 rounded-r">
									Next
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Entradas;