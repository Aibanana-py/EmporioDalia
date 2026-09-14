import React from 'react';
import n2 from '../imagenes/noticia2.jpg'

export const Noticia2 = () => {
    return (
        <div className="container mt-4 mb-5" style={{ maxWidth: '900px' }}>
            
            <h2 className="text-center fw-bold mb-4">Nueva Carta de Invierno: Sabores que abrazan</h2>

          
            <div className="border border-2 border-dark mb-3 bg-white d-flex align-items-center justify-content-center" style={{ height: '350px', overflow: 'hidden' }}>
                    <img src={n2} className="d-block w-100" alt="Not Found" style={{ maxHeight: '800px' }} />
            </div>

           
            <div className="border border-2 border-dark p-4 bg-white mb-4 text-center">
                <p className="mb-0 fw-bold fs-5">
                    Nuestro equipo ha diseñado un menú de invierno que rescata sabores caseros con cremas calientes, repostería especiada y café de especialidad.
                </p>
            </div>

           
            <div className="row g-3">
                <div className="col-md-4">
                    <div className="border border-2 border-dark p-3 bg-white h-100 text-center">
                        <p className="mb-0">
                            Con la llegada de las bajas temperaturas, nuestra cocina se ha transformado. Hemos incorporado ingredientes de temporada, destacando zapallos asados, castañas y especias como la canela.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="border border-2 border-dark p-3 bg-white h-100 text-center">
                        <p className="mb-0">
                            El plato estrella de esta temporada es nuestra nueva crema de tomates asados con crutones de masa madre, ideal para acompañar con nuestra selección de tés e infusiones orgánicas.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="border border-2 border-dark p-3 bg-white h-100 text-center">
                        <p className="mb-0">
                            Además, nuestra barra de repostería estrena tartas tibias de manzana que combinan perfectamente con nuestro ambiente acogedor. ¡Ven a refugiarte del frío en Emporio Dalia!
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}