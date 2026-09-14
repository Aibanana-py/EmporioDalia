import React from 'react';
import n3 from '../imagenes/noticia3.jpg'

export const Noticia3 = () => {
    return (
        <div className="container mt-4 mb-5" style={{ maxWidth: '900px' }}>
            
            <h2 className="text-center fw-bold mb-4">Éxito total en nuestro Taller de Pastelería</h2>

            <div className="border border-2 border-dark mb-3 bg-white d-flex align-items-center justify-content-center" style={{ height: '350px', overflow: 'hidden' }}>
                    <img src={n3} className="d-block w-100" alt="Not Found" style={{ maxHeight: '500px' }} />
            </div>

            <div className="border border-2 border-dark p-4 bg-white mb-4 text-center">
                <p className="mb-0 fw-bold fs-5">
                    Aficionados y amantes del dulce se dieron cita en nuestro salón para aprender los secretos de la repostería fina en nuestro primer masterclass práctico.
                </p>
            </div>

            <div className="row g-3">
                <div className="col-md-4">
                    <div className="border border-2 border-dark p-3 bg-white h-100 text-center">
                        <p className="mb-0">
                            Durante la jornada, nuestra chef pastelera compartió técnicas exclusivas para lograr el horneado perfecto, revelando los secretos detrás de nuestros famosos macarons y donas temáticas.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="border border-2 border-dark p-3 bg-white h-100 text-center">
                        <p className="mb-0">
                            Los asistentes tuvieron la oportunidad de poner las manos en la masa, preparando sus propias cremas pasteleras y practicando el delicado arte de la decoración con manga.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="border border-2 border-dark p-3 bg-white h-100 text-center">
                        <p className="mb-0">
                            Debido al increíble entusiasmo y la rápida venta de entradas, ya estamos organizando una segunda edición del taller para el próximo mes. ¡Mantente atento a nuestras redes!
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}