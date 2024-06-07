import Comment from "./Comment/Comment";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Replica from "./Replica/Replica";
import HacerComentario from "./HacerComentario/HacerComentario";

const CommentSection = () => {

    const { id } = useParams();

    const [comentarios, setComentarios] = useState([]);

    useEffect(() => {
        
        axios.get(`/posts/${id}/comentarios`)
            .then(response => {
                setComentarios(response.data);
            })
            .catch(error => {
                console.error('Error al obtener las entradas:', error);
            });
    }, []);

    return (
        <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
            <div className="max-w-2xl mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discusión</h2>
                </div>
                <HacerComentario />
                {
                    comentarios.map(comentario => {
                        if (comentario.parent_id === null) {//Comprobamos si es comentario o replica
                            return (
                                <Comment
                                    contenido={comentario.contenido}
                                />
                            );
                        }
                        return (
                            <Replica
                                contenido={comentario.contenido}
                            />
                        );
                    })
                }

            </div>
        </section>
    );
}

export default CommentSection;