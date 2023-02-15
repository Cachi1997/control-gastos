import React from 'react'

export const NuevoPresupuesto = () => {
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form className='formulario'>
            <div className='campo'>
                <label>Definir Presupuesto</label>
                <input 
                    className='nuevo-presupuesto'
                    type="text"
                    placeholder='Añade tu Presupuesto'

                />
            </div>
            <input type="submit" value="Añadir"/>
        </form>
    </div>
  )
}
