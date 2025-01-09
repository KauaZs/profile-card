import React from 'react'

const PageNotFound = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-900 relative'>
        <div className='flex flex-col'>
          <h1 className='text-9xl'>404</h1>
            <h1 className='text-white text-center'>User not found</h1>
            <button className='bg-slate-300 rounded mt-6 hover:bg-slate-50' onClick={() => window.location.pathname = '/home'}>Voltar</button>
        </div>
    </div>
  )
}

export default PageNotFound
