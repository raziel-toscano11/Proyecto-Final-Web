import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const HacerComentario = () => {

    const { id } = useParams();

    const [contenido, setContenido] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Realiza una solicitud POST a la API para crear el comentario
            await axios.post(`/posts/${id}/comentar`, { contenido });
            console.log('Comentario creado correctamente');
            window.location.reload();

            
        } catch (error) {
            console.error('Error al crear el comentario:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6">
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <label htmlFor="comment" className="sr-only">Your comment</label>
                <textarea id="comment" rows="6" value={contenido} onChange={(e) => setContenido(e.target.value)}
                    className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                    placeholder="Escribe un comentario..." required></textarea>
            </div>
            <button  type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                Comentar
            </button>
        </form>
    );
}

export default HacerComentario;