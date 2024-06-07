import { useNavigate } from 'react-router-dom';

const Entrada = (props) => {

    const navigate = useNavigate();

    const verHilo = (event) => {
        navigate(`/foro/${props.id}`);
    }

    return (
        <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-blue-300 text-sm">
                <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                        <img className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt="" />
                    </div>
                    <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                            {props.titulo}
                        </p>
                    </div>
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-blue-300 text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{props.autor}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-blue-300 text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {props.creacion}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-blue-300 text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {props.contenido}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-blue-300 text-sm">
                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight text-center">
                    <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                    <button onClick={verHilo} data-id={props.id} className="relative">Ver Hilo</button>
                </span>
            </td>
        </tr>
    );
}

export default Entrada;