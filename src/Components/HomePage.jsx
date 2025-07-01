import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <section className='d-flex align-items-center justify-content-between text-light m-0 p-0'>
        <div className='border border-1 border-light p-5' onClick={() => console.log('aqui deberia de ir una imagen')}>
            <h1>Home Page</h1>
            <h2>Tarjeta Bancaria</h2>
            <p>Welcome to the Home Page</p>
            <span>aqui deberia de ir una imagen</span>
        </div>

         <div className='border border-1 border-light p-5' >
            <h1>Home Page</h1>
            <h2>Tarjeta Bancaria</h2>
            <p>Welcome to the Home Page</p>
            <span>aqui deberia de ir una imagen</span>
            
        </div>
    </section>
  )
}

export default HomePage