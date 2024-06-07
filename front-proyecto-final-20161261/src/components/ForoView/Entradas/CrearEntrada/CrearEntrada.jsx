import Header from "../../../Header/Header";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CrearEntrada = () => {

    const navigate = useNavigate();
    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');
    const [imagen, setImagen] = useState(null); // Estado para la imagen

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('contenido', contenido);
        formData.append('images[]', imagen); // Agrega la imagen al formData

        try {
            await axios.post('/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Importante para enviar archivos
                },
            });
            console.log('Post creado correctamente');
            
            navigate('/foro');
        } catch (error) {
            console.error('Error al crear el post:', error);
        }
    };

    return (
        <div>
            <Header />
            <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
                <h1 className="text-xl font-bold text-white capitalize dark:text-white">¡Cree una publicacion en el foro!</h1>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="titulo">Titulo de su publicacion</label>
                            <input
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                id='titulo'
                                type="text"
                                placeholder="Título"
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="contenido">Contenido de su publicacion</label>
                            <textarea
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                id="contenido"
                                placeholder="Contenido"
                                value={contenido}
                                onChange={(e) => setContenido(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">
                                Agregue una imagen
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label htmlFor="images" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                            <span className="">Upload a file</span>
                                            <input
                                                className="sr-only"
                                                id="images"
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => setImagen(e.target.files[0])} 
                                            />
                                        </label>
                                        <p className="pl-1 text-white">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-white">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button type="submit" className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Crear</button>
                    </div>
                </form>
            </section>

        </div>

    );
}
export default CrearEntrada;