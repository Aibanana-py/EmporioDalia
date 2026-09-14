import React, { useState, useEffect } from 'react';

export const Procesar = () => {

    const [registros, setRegistros] = useState([]);
    
    const [dato1, setDato1] = useState('');
    const [dato2, setDato2] = useState('');
    const [dato3, setDato3] = useState('');
    const [dato4, setDato4] = useState('');
    const [dato5, setDato5] = useState('Seleccione');
    const [dato6, setDato6] = useState('');
    const [dato7, setDato7] = useState('Seleccione');
    const [dato8, setDato8] = useState('');
    const [dato9, setDato9] = useState('');
    const [dato10, setDato10] = useState('Seleccione');

    useEffect(() => {
        const guardados = localStorage.getItem('datosProcesar');
        if (guardados) {
            setRegistros(JSON.parse(guardados));
        }
    }, []);

    const handleRegistrar = (e) => {
        e.preventDefault();
        
        const nuevoRegistro = {
            d1: dato1, d2: dato2, d3: dato3, d4: dato4, d5: dato5,
            d6: Number(dato6),
            d7: dato7, d8: dato8, d9: dato9, d10: dato10
        };

        const nuevaLista = [...registros, nuevoRegistro];
        setRegistros(nuevaLista);
        localStorage.setItem('datosProcesar', JSON.stringify(nuevaLista));

        setDato1(''); setDato2(''); setDato3(''); setDato4(''); setDato5('Seleccione');
        setDato6(''); setDato7('Seleccione'); setDato8(''); setDato9(''); setDato10('Seleccione');
        alert("Registro guardado exitosamente");
    };

    const handleEliminar = (id) => {
        if (window.confirm(`¿Seguro que desea eliminar el registro con Dato1: ${id}?`)) {
            const listaActualizada = registros.filter(item => item.d1 !== id);
            setRegistros(listaActualizada);
            localStorage.setItem('datosProcesar', JSON.stringify(listaActualizada));
        }
    };

    const cantidad = registros.length;
    const suma = registros.reduce((total, actual) => total + actual.d6, 0);
    const promedio = cantidad > 0 ? (suma / cantidad).toFixed(0) : 0;

    return (
        <div className="container mt-4 mb-5">
            
            <div className="p-4 border border-3 border-dark" style={{ backgroundColor: '#d3d3d3' }}>
                
                <h2 className="text-center fw-bold mb-4">Gestión de "Reservas"</h2>

                <div className="bg-white border border-2 border-dark p-4 mb-4">
                    <form onSubmit={handleRegistrar}>
                        
                        <div className="row mb-3 align-items-end">
                            <div className="col-md-4 d-flex gap-2">
                                <div className="flex-grow-1">
                                    <label className="fw-bold fs-6">ID:</label>
                                    <input type="text" className="form-control border-dark" value={dato1} onChange={e => setDato1(e.target.value)} required />
                                </div>
                                <button type="button" className="btn btn-primary border-dark mt-4">🔍</button>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-4">
                                <label className="fw-bold fs-6">Nombre:</label>
                                <input type="text" className="form-control border-dark" value={dato2} onChange={e => setDato2(e.target.value)} />
                            </div>
                            <div className="col-md-4">
                                <label className="fw-bold fs-6">Apellido:</label>
                                <input type="text" className="form-control border-dark" value={dato3} onChange={e => setDato3(e.target.value)} />
                            </div>
                            <div className="col-md-4">
                                <label className="fw-bold fs-6">Telefono:</label>
                                <input type="text" className="form-control border-dark" value={dato4} onChange={e => setDato4(e.target.value)} />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-4">
                                <label className="fw-bold fs-6">Locacion:</label>
                                <select className="form-select border-dark" value={dato5} onChange={e => setDato5(e.target.value)}>
                                    <option>Seleccione</option>
                                    <option>Terraza</option>
                                    <option>Salón</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label className="fw-bold fs-6">Abono ($):</label>
                                <input type="number" className="form-control border-dark" value={dato6} onChange={e => setDato6(e.target.value)} placeholder="Abono" required />
                            </div>
                            <div className="col-md-4">
                                <label className="fw-bold fs-6">Estilo de Menu:</label>
                                <select className="form-select border-dark" value={dato7} onChange={e => setDato7(e.target.value)}>
                                    <option>Seleccione</option>
                                    <option>Normal</option>
                                    <option>Vegano</option>
                                </select>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col-md-4">
                                <label className="fw-bold fs-6 d-block">Alergias Alimentarias:</label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input border-dark" type="radio" name="opciones" value="Opción 1" checked={dato8 === 'Opción 1'} onChange={e => setDato8(e.target.value)} />
                                    <label className="form-check-label">Si</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input border-dark" type="radio" name="opciones" value="Opción 2" checked={dato8 === 'Opción 2'} onChange={e => setDato8(e.target.value)} />
                                    <label className="form-check-label">No</label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label className="fw-bold fs-6">Alegia(coloque ninguna si en la saleccion puso no):</label>
                                <input type="text" className="form-control border-dark" value={dato9} onChange={e => setDato9(e.target.value)} />
                            </div>
                            <div className="col-md-4">
                                <label className="fw-bold fs-6">Metodo de Pago:</label>
                                <select className="form-select border-dark" value={dato10} onChange={e => setDato10(e.target.value)}>
                                    <option>Seleccione</option>
                                    <option>Efectivo</option>
                                    <option>Débito</option>
                                </select>
                            </div>
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-success fw-bold border border-dark px-5">Registrar 🖫</button>
                        </div>
                    </form>
                </div>

                <div className="bg-white border border-2 border-dark p-3">
                    <h3 className="text-center fw-bold">Listado De Elementos Registrados</h3>
                    
                    <div className="d-flex justify-content-center gap-4 fw-bold fs-5 mb-3">
                        <span className="text-primary">Cantidad : {cantidad}</span>
                        <span className="text-success">Suma : ${suma}</span>
                        <span className="text-warning text-darken" style={{ color: '#b8860b' }}>Promedio : ${promedio}</span>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-borderless text-center align-middle" style={{ fontSize: '14px' }}>
                            <thead className="border-bottom border-dark">
                                <tr>
                                    <th>Id</th><th>Nombre</th><th>Apellido</th><th>Telefono</th><th>Locacion</th>
                                    <th>Abono</th><th>Estilo de Menu</th><th>Dato8</th><th>Dato9</th><th>Metodo de Pago</th>
                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {registros.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.d1}</td><td>{item.d2}</td><td>{item.d3}</td><td>{item.d4}</td><td>{item.d5}</td>
                                        <td>{item.d6}</td><td>{item.d7}</td><td>{item.d8}</td><td>{item.d9}</td><td>{item.d10}</td>
                                        <td>
                                            <button className="btn btn-link text-danger fs-4 p-0" onClick={() => handleEliminar(item.d1)}>
                                                🗑️
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};