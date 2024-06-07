
const Post = (props) => {
    return (
        <div className="max-w-screen-lg mx-auto">

            <main className="bg-gray-800 mt-10">

                <div className="mb-4 md:mb-0 w-full mx-auto relative">
                    <div className="px-4 lg:px-0">
                        <h2 className="text-4xl font-semibold text-white leading-tight">
                            {props.titulo}
                        </h2>
                        <a
                            href="#"
                            className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
                        >
                            Categorias
                        </a>
                    </div>

                    <img src="https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" className="w-full object-cover lg:rounded" style={{ height: '28em' }} />
                </div>

                <div className="flex flex-col lg:flex-row lg:space-x-12">

                    <div className="px-4 lg:px-0 mt-12 text-white text-lg leading-relaxed w-full lg:w-3/4">
                        <p className="pb-6">
                            {props.contenido}
                        </p>
                    </div>

                    <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
                        <div className="p-4 border-t border-b md:border md:rounded">
                            <p className="text-white py-3">
                                Publicacion del foro realizada por:
                            </p>
                            <div className="flex py-2">
                                <img src="https://randomuser.me/api/portraits/men/97.jpg"
                                    className="h-10 w-10 rounded-full mr-2 object-cover" />
                                <div>
                                    <p className="font-semibold text-white text-sm"> {props.nombre} </p>
                                    <p className="font-semibold text-white text-xs"> Miembro </p>
                                </div>
                            </div>

                            <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
                                Ver Perfil
                                <i className='bx bx-user-plus ml-2' ></i>
                            </button>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

export default Post;