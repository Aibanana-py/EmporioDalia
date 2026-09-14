import React from 'react';
import img1 from '../imagenes/michiburger.jpg';
import img2 from '../imagenes/michipasta.jpg';
import img3 from '../imagenes/mouse.jpg';
import img4 from '../imagenes/limonada.jpg';
import img5 from '../imagenes/donas.jpg';
import img6 from '../imagenes/gatuccinno.jpg';

export const Galeria = () => {
    return (
        <div className="container mt-4 mb-5" style={{ maxWidth: '1000px' }}>
            
            <center>
                <h2 style={{ fontWeight: 'bold', marginBottom: '30px' }}>
                    Galería de Productos 
                </h2>
            </center>

            <div className="row">
                
                
                <div className="col-md-4 mb-4">
                    <div style={{ border: '3px solid black', padding: '15px', backgroundColor: '#fff' }}>
                        <p style={{ fontWeight: 'bold', margin: '0' }}>Producto: Michiburger</p>
                        <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>Precio : $7.990</p>
                        
                        <div style={{ border: '2px solid black', height: '200px', marginBottom: '15px' }}>
                            <img src={img1} alt="Michiburger" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
                            <span style={{ fontWeight: 'bold', marginRight: '10px' }}>Cantidad:</span>
                            <input type="number" min="1" defaultValue="1" style={{ width: '50px', border: '2px solid black', textAlign: 'center' }} />
                        </div>
                        
                        <div style={{ border: '2px solid black', padding: '10px', textAlign: 'center', fontSize: '14px' }}>
                            Hamburguesa premium en pan artesanal teñido con remolacha, queso fundido y cebolla caramelizada.
                        </div>
                    </div>
                </div>

           
                <div className="col-md-4 mb-4">
                    <div style={{ border: '3px solid black', padding: '15px', backgroundColor: '#fff' }}>
                        <p style={{ fontWeight: 'bold', margin: '0' }}>Producto: Michipasta Rose</p>
                        <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>Precio : $8.990</p>
                        
                        <div style={{ border: '2px solid black', height: '200px', marginBottom: '15px' }}>
                            <img src={img2} alt="Michipasta Rose" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
                            <span style={{ fontWeight: 'bold', marginRight: '10px' }}>Cantidad:</span>
                            <input type="number" min="1" defaultValue="1" style={{ width: '50px', border: '2px solid black', textAlign: 'center' }} />
                        </div>
                        
                        <div style={{ border: '2px solid black', padding: '10px', textAlign: 'center', fontSize: '14px' }}>
                            Penne rigate en salsa de tomates cherry y crema, con camarones salteados.
                        </div>
                    </div>
                </div>

                
                <div className="col-md-4 mb-4">
                    <div style={{ border: '3px solid black', padding: '15px', backgroundColor: '#fff' }}>
                        <p style={{ fontWeight: 'bold', margin: '0' }}>Producto: Mousse Michi Fresa</p>
                        <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>Precio : $3.790</p>
                        
                        <div style={{ border: '2px solid black', height: '200px', marginBottom: '15px' }}>
                            <img src={img3} alt="Mousse Michi Fresa" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
                            <span style={{ fontWeight: 'bold', marginRight: '10px' }}>Cantidad:</span>
                            <input type="number" min="1" defaultValue="1" style={{ width: '50px', border: '2px solid black', textAlign: 'center' }} />
                        </div>
                        
                        <div style={{ border: '2px solid black', padding: '10px', textAlign: 'center', fontSize: '14px' }}>
                            Mousse ligero decorado con orejitas de chocolate blanco.
                        </div>
                    </div>
                </div>

               
                <div className="col-md-4 mb-4">
                    <div style={{ border: '3px solid black', padding: '15px', backgroundColor: '#fff' }}>
                        <p style={{ fontWeight: 'bold', margin: '0' }}>Producto: Limonada Sakura</p>
                        <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>Precio : $4.590</p>
                        
                        <div style={{ border: '2px solid black', height: '200px', marginBottom: '15px' }}>
                            <img src={img4} alt="Limonada Sakura" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
                            <span style={{ fontWeight: 'bold', marginRight: '10px' }}>Cantidad:</span>
                            <input type="number" min="1" defaultValue="1" style={{ width: '50px', border: '2px solid black', textAlign: 'center' }} />
                        </div>
                        
                        <div style={{ border: '2px solid black', padding: '10px', textAlign: 'center', fontSize: '14px' }}>
                            Limonada natural con jarabe de flor de cerezo y mucho hielo.
                        </div>
                    </div>
                </div>

                
                <div className="col-md-4 mb-4">
                    <div style={{ border: '3px solid black', padding: '15px', backgroundColor: '#fff' }}>
                        <p style={{ fontWeight: 'bold', margin: '0' }}>Producto: Donas Gatito</p>
                        <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>Precio : $3.790</p>
                        
                        <div style={{ border: '2px solid black', height: '200px', marginBottom: '15px' }}>
                            <img src={img5} alt="Donas Gatito" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
                            <span style={{ fontWeight: 'bold', marginRight: '10px' }}>Cantidad:</span>
                            <input type="number" min="1" defaultValue="2" style={{ width: '50px', border: '2px solid black', textAlign: 'center' }} />
                        </div>
                        
                        <div style={{ border: '2px solid black', padding: '10px', textAlign: 'center', fontSize: '14px' }}>
                            Tus clásicas donas convertidas en michis adorables.
                        </div>
                    </div>
                </div>

            
                <div className="col-md-4 mb-4">
                    <div style={{ border: '3px solid black', padding: '15px', backgroundColor: '#fff' }}>
                        <p style={{ fontWeight: 'bold', margin: '0' }}>Producto: Gatuccinno</p>
                        <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>Precio : $2.990</p>
                        
                        <div style={{ border: '2px solid black', height: '200px', marginBottom: '15px' }}>
                            <img src={img6} alt="Gatuccinno" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
                            <span style={{ fontWeight: 'bold', marginRight: '10px' }}>Cantidad:</span>
                            <input type="number" min="1" defaultValue="1" style={{ width: '50px', border: '2px solid black', textAlign: 'center' }} />
                        </div>
                        
                        <div style={{ border: '2px solid black', padding: '10px', textAlign: 'center', fontSize: '14px' }}>
                            Un tradicional capuccino con delicada espuma gatuna.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}