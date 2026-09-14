import React from 'react'
import error404 from '../imagenes/error404.png'

export const Error404 = () => {
  return (
    <div>
        <div>
        
            <div className="text-center">
                <img className="mt-3  p-5"  src={ error404 }  width={ 600 }  border={ 2 } alt="No Encontrado" />
            </div>

        </div>

    </div>
  )
}