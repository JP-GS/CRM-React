import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError()

  return (
    <div>
        <h1 
            className="text-center font-extrabold text-blue-800 uppercase text-6xl m-20"
        >CRM Clientes</h1>

        <p className="text-center text-gray-800 uppercase mb-5">Ups! Hubo un error!! Aqui deberían listarse los clientes</p>
        <p className="text-center font-extrabold text-blue-500 uppercase text-xl mb-5">Este es un proyecto de prueba y no tiene una base de datos real</p>
        <p className="text-center">{error.statusText || error.message}</p>
    </div>
  )
}

export default ErrorPage