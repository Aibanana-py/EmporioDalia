import React from 'react'
import u1 from '../imagenes/user1.jpg'
import u2 from '../imagenes/user2.jpg'
import u3 from '../imagenes/user3.jpg'
import u4 from '../imagenes/user4.jpg'
import u5 from '../imagenes/user5.jpg'
import u6 from '../imagenes/user6.jpg'

export const Testimonios = () => {
    return (
        <div className="container mt-4 mb-5" style={{ maxWidth: '900px' }}>
            
            <h2 className="text-center fw-bold mb-5">Testimonios de Usuarios</h2>

            <div className="row g-4">
                
                <div className="col-md-4 text-center">
                    <div className="mx-auto border border-2 border-dark rounded-circle d-flex align-items-center justify-content-center bg-white mb-3" style={{ width: '130px', height: '130px', overflow: 'hidden' }}>
                         <img src={u1} alt="user" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    
                    <div className="border border-2 border-dark fw-bold mb-3 mx-auto" style={{ backgroundColor: '#e9ecef', padding: '5px 15px', borderRadius: '10px', width: 'fit-content' }}>
                        María José Flores
                    </div>
                    
                    <div className="border border-2 border-dark p-3 bg-white text-start" style={{ minHeight: '120px' }}>
                        "Me encantó la estética del lugar. El Gatuccinno estaba delicioso y la atención fue maravillosa. ¡Moka es un amor de anfitrión!"
                    </div>
                </div>

                <div className="col-md-4 text-center">
                    <div className="mx-auto border border-2 border-dark rounded-circle d-flex align-items-center justify-content-center bg-white mb-3" style={{ width: '130px', height: '130px', overflow: 'hidden' }}>
                        <img src={u2} alt="user" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    
                    <div className="border border-2 border-dark fw-bold mb-3 mx-auto" style={{ backgroundColor: '#e9ecef', padding: '5px 15px', borderRadius: '10px', width: 'fit-content' }}>
                        Carla Rivera
                    </div>
                    
                    <div className="border border-2 border-dark p-3 bg-white text-start" style={{ minHeight: '120px' }}>
                        "La Michiburger es lejos la mejor hamburguesa que he probado en la zona. El pan de remolacha le da un toque único. 100% recomendado."
                    </div>
                </div>

            
                <div className="col-md-4 text-center">
                    <div className="mx-auto border border-2 border-dark rounded-circle d-flex align-items-center justify-content-center bg-white mb-3" style={{ width: '130px', height: '130px', overflow: 'hidden' }}>
                        <img src={u3} alt="user" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    
                    <div className="border border-2 border-dark fw-bold mb-3 mx-auto" style={{ backgroundColor: '#e9ecef', padding: '5px 15px', borderRadius: '10px', width: 'fit-content' }}>
                        Valentina Soto
                    </div>
                    
                    <div className="border border-2 border-dark p-3 bg-white text-start" style={{ minHeight: '120px' }}>
                        "Fui por primera vez a comprar el Mousse de Fresa y me enamoré de la pastelería. Es un ambiente muy tranquilo y acogedor para ir a estudiar."
                    </div>
                </div>

                <div className="col-md-4 text-center mt-4">
                    <div className="mx-auto border border-2 border-dark rounded-circle d-flex align-items-center justify-content-center bg-white mb-3" style={{ width: '130px', height: '130px', overflow: 'hidden' }}>
                    <img src={u4} alt="user" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    
                    <div className="border border-2 border-dark fw-bold mb-3 mx-auto" style={{ backgroundColor: '#e9ecef', padding: '5px 15px', borderRadius: '10px', width: 'fit-content' }}>
                        Andrés Medina
                    </div>
                    
                    <div className="border border-2 border-dark p-3 bg-white text-start" style={{ minHeight: '120px' }}>
                        "La Limonada Sakura es súper refrescante. Se nota la dedicación que le ponen a cada detalle de la presentación de los platos."
                    </div>
                </div>

               
                <div className="col-md-4 text-center mt-4">
                    <div className="mx-auto border border-2 border-dark rounded-circle d-flex align-items-center justify-content-center bg-white mb-3" style={{ width: '130px', height: '130px', overflow: 'hidden' }}>
                        <img src={u5} alt="user" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    
                    <div className="border border-2 border-dark fw-bold mb-3 mx-auto" style={{ backgroundColor: '#e9ecef', padding: '5px 15px', borderRadius: '10px', width: 'fit-content' }}>
                        Camila Vargas
                    </div>
                    
                    <div className="border border-2 border-dark p-3 bg-white text-start" style={{ minHeight: '120px' }}>
                        "Llevé a mi familia para celebrar un cumpleaños y todo estuvo perfecto. Las instalaciones son preciosas y muy amigables."
                    </div>
                </div>

                
                <div className="col-md-4 text-center mt-4">
                    <div className="mx-auto border border-2 border-dark rounded-circle d-flex align-items-center justify-content-center bg-white mb-3" style={{ width: '130px', height: '130px', overflow: 'hidden' }}>
                        <img src={u6} alt="user" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    
                    <div className="border border-2 border-dark fw-bold mb-3 mx-auto" style={{ backgroundColor: '#e9ecef', padding: '5px 15px', borderRadius: '10px', width: 'fit-content' }}>
                        Felipe Pavez
                    </div>
                    
                    <div className="border border-2 border-dark p-3 bg-white text-start" style={{ minHeight: '120px' }}>
                        "Las donas de gatito son la perdición de mis hijos. Siempre que pasamos por fuera nos obligan a entrar a saludar al michi."
                    </div>
                </div>

            </div>
        </div>
    )
}