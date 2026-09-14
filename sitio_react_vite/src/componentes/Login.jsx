import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();

    const cerrarModal = () => {
        navigate('/inicio')
    }

    return (
  
        <div 
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1050
            }}
        >
            <div className="bg-white border border-3 border-dark p-5" style={{ width: '550px', position: 'relative' }}>
                
                <button 
                    onClick={cerrarModal}
                    className="btn-close position-absolute top-0 end-0 m-3" 
                    aria-label="Cerrar"
                ></button>

                <h2 className="text-center fw-bold mb-5 text-dark">Formulario de Inicio de Sesión</h2>

                <form>
                    <div className="row mb-4 align-items-center">
                        <div className="col-4 text-end">
                            <label className="fw-bold fs-5 text-dark">Usuario</label>
                        </div>
                        <div className="col-8">
                            <input type="text" className="form-control border border-2 border-dark rounded-0" />
                        </div>
                    </div>

                    <div className="row mb-5 align-items-center">
                        <div className="col-4 text-end">
                            <label className="fw-bold fs-5 text-dark">Contraseña</label>
                        </div>
                        <div className="col-8">
                            <input type="password" placeholder="******" className="form-control border border-2 border-dark rounded-0 text-center fs-5" />
                        </div>
                    </div>

                    <div className="text-center mb-3">
                        <button type="button" className="btn text-white fw-bold border border-2 border-dark rounded-0 px-5 py-2" style={{ backgroundColor: '#808080', fontSize: '18px' }}>
                            Login
                        </button>
                    </div>

                    <div className="text-center">
                        <a href="#" className="text-primary fw-bold" style={{ fontStyle: 'italic', textDecoration: 'underline' }}>
                            ¿Olvidaste tu Contraseña?
                        </a>
                    </div>
                </form>

            </div>
        </div>
    )
}
