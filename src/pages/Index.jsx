/* eslint-disable react-refresh/only-export-components */
import { obtenerClientes } from '../../data/clientes'
import { useLoaderData } from 'react-router-dom'
import Cliente from '../components/Cliente.jsx'

export function loader() {
  const clientes = obtenerClientes()
  
  return clientes
}

function Index() {

  const clientes = useLoaderData()
  if(Object.values(clientes).length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Este es un proyecto de práctica y no tiene una base de datos real'
    })
  }

  return (
    <>
      <div className="text-blue-900 font-black text-4xl">Clientes</div>
      <p className="mt-3">Administra tus clientes</p>

      {clientes.length ? (

        <table className='w-full bg-white shadow mt-5 table-auto'>
          <thead className='bg-blue-800 text-white'>
            <tr className='p-2'>
              <th>Cliente</th>
              <th>contacto</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {clientes.map( cliente => (
              <Cliente
                cliente={cliente}
                key={cliente.id}
              />
            ))}
          </tbody>
        </table>

      ) : (

        <p>No hay clientes</p>
      )}
    </>
  )
}

export default Index