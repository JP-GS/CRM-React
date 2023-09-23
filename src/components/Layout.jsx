import { Outlet, Link, useLocation } from 'react-router-dom'
function Layout() {

  const location = useLocation()

  return (
    <div className='md:flex md:min-h-screen'>
        <aside className='bg-blue-900 md:w-1/4 px-5 py-10'>
          <h2 className='text-4xl font-black text-center text-white'>CRM Clientes</h2>

          <nav className='mt-10'>

            <Link 
              to='/' 
              className={`${location.pathname === '/' ? 'text-blue-300' : 'text-white' } text-2xl font-bold text-white hover:text-blue-300 block mt-2'`}
            >Clientes</Link>

            <Link 
              to='/clientes/nuevo' 
              className={`${location.pathname === '/clientes/nuevo' ? 'text-blue-300' : 'text-white' } text-2xl font-bold text-white hover:text-blue-300 block mt-2'`}
            >Nuevo Cliente</Link>

          </nav>
        </aside>
        <main className='md:w-3/4 md:h-screen overflow-scroll p-10'>
          <Outlet/>
        </main>
    </div>
  )
}

export default Layout