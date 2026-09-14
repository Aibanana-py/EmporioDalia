import React, { useState, useEffect } from 'react';

export const API = () => {
    const [datosApi, setDatosApi] = useState([]);

    useEffect(() => {
        fetch('/API_JSON/26_restorant_api.json')
            .then(response => response.json())
            .then(data => {
                setDatosApi(data.listado_restorant);
            })
            .catch(error => console.log("Error consultando API: ", error));
    }, []);

    return (
        <div className="container mt-4 mb-5" style={{ maxWidth: '1000px' }}>
        
        
            <div className="border border-3 border-dark p-4 bg-white shadow-sm">
                
                <h2 className="text-center fw-bold mb-4">API LOCAL DE "RESTORANT"</h2>

                <div className="table-responsive">
                    <table className="table table-bordered text-center align-middle mb-0 border-dark">
                        
                        <thead className="table-dark">
                            <tr>
                                <th className="py-3 border-light">Id</th>
                                <th className="py-3 border-light">Plato</th>
                                <th className="py-3 border-light">Precio</th>
                                <th className="py-3 border-light">Categoria</th>
                                <th className="py-3 border-light">Codigo</th>
                                <th className="py-3 border-light">Cantidad</th>
                                <th className="py-3 border-light">Chef</th>
                                <th className="py-3 border-light">Mesas</th>
                                <th className="py-3 border-light">Eventos</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {datosApi && datosApi.length > 0 ? (
                                datosApi.map((item) => (
                                    <tr key={item.id}>
                                        <td className="border-dark fw-bold">{item.id}</td>
                                        <td className="border-dark">{item.plato}</td>
                                        <td className="border-dark">{item.carta.precio}</td>
                                        <td className="border-dark">{item.carta.preparacion.categoria}</td>
                                        <td className="border-dark">{item.carta.preparacion.codigo}</td>
                                        <td className="border-dark">{item.carta.preparacion.porcion}</td>
                                        <td className="border-dark">{item.carta.preparacion.chef.nombre}</td>
                                        <td className="border-dark">{item.carta.reservas.mesas}</td>
                                        <td className="border-dark">{item.carta.reservas.eventos}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="9" className="text-muted fw-bold border-dark py-4">
                                        Cargando API Local...
                                    </td>
                                </tr>
                            )}
                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    );
};