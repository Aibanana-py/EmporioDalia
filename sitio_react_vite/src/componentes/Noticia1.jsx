import React from 'react'
import n1 from '../imagenes/noticia1.jpg'

export const Noticia1 = () => {
    return (
        <div className="container mt-4 mb-5" style={{ maxWidth: '900px' }}>
            
            <h2 className="text-center fw-bold mb-4">¡Bienvenido Moka! El nuevo anfitrión de Emporio Dalia</h2>

            <div className="border border-2 border-dark mb-3 bg-white d-flex align-items-center justify-content-center" style={{ height: '350px', overflow: 'hidden' }}>
                 <img src={n1} className="d-block w-100" alt="Not Found" style={{ maxHeight: '700px'}} />
            </div>

            <div className="border border-2 border-dark p-4 bg-white mb-4 text-center">
                <p className="mb-0 fw-bold fs-5">
                    Le damos la bienvenida a "Moka", nuestro nuevo michi rescatado que ahora es el anfitrión oficial y guardián de las buenas energías en Emporio Dalia.
                </p>
            </div>

            <div className="row g-3">
                <div className="col-md-4">
                    <div className="border border-2 border-dark p-3 bg-white h-100 text-center">
                        <p className="mb-0">
                            La historia de Moka comenzó cuando lo encontramos refugiándose de la lluvia cerca de nuestra terraza. Tras llevarlo al veterinario y darle muchos cuidados, decidió quedarse con nosotros para siempre.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="border border-2 border-dark p-3 bg-white h-100 text-center">
                        <p className="mb-0">
                            Hoy en día, su pasatiempo favorito es dormir sobre los cojines de las sillas junto a la ventana y recibir cariños de los clientes que vienen a disfrutar de un buen Gatuccinno.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="border border-2 border-dark p-3 bg-white h-100 text-center">
                        <p className="mb-0">
                            Te invitamos a conocerlo. Eso sí, te advertimos que es muy probable que intente hipnotizarte con sus ronroneos para que le compartas un pedacito de tu Michiburger.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}