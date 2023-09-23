import {useNavigate, Form, useActionData, redirect} from 'react-router-dom'
import Formulario from '../components/Formulario'
import Error from '../components/Error'
import { agregarCliente } from '../../data/clientes'

// eslint-disable-next-line react-refresh/only-export-components
export async function action({request}) {
  const formData = await request.formData()

  const datos = Object.fromEntries(formData)
  const email = formData.get('email')

  //Validar
  const errores =[]
  if(Object.values(datos).includes('')) {
    errores.push('Todos los campos son obligatorios')
  }


  // eslint-disable-next-line no-control-regex, no-useless-escape
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  if(!regex.test(email)){
    errores.push('El email no es válido')
  }
  //Retornar
  if(Object.keys(errores).length){
    return errores
  }

  await agregarCliente(datos)

  return redirect('/')
}

function NuevoCliente() {

  const errores = useActionData()
  const navigate = useNavigate()

  return (
    <>
      <div className="text-blue-900 font-black text-4xl">Nuevo Cliente</div>
      <p className="mt-3">Llena todos los campos para registrar un nuevo cliente</p>

      <div className="flex justify-end">
        <button 
          type="button"
          className="bg-blue-800 hover:bg-blue-700 uppercase text-white font-bold px-3 py-1"
          onClick={() => navigate('/')}
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">

      {errores?.length && errores.map((error, i ) => <Error key={i} >{error}</Error>) }

        <Form
          method='post'
          noValidate
        >

          <Formulario />

          <input 
            type="submit" 
            className='bg-blue-800 hover:bg-blue-700 text-lg text-white mt-5 w-full uppercase font-bold p-3'
            value='Registrar Cliente'
          />
        </Form>
      </div>
    </>
  )
}

export default NuevoCliente