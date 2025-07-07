import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/HomePage.css'
const Inicio = () => {
  return (
    <>
      <section className='container-botons d-flex flex-column gap-5 '>
        <div className='contenedor-boton1 border border-1 border-light p-5 w-100'>
            <h1>Tarjeta de Credito</h1>
        </div>
         <div className='contenedor-boton2 border border-1 border-light p-5 w-100' >
            <h1>Tarjeta de Debito</h1>
        </div>
           <div className='contenedor-boton3 border border-1 border-light p-5 w-100' >
            <h1>Caja de Ahorros</h1>
        </div>
        
    </section>
    </>
  )
}

export default Inicio