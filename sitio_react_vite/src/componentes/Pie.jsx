import React from 'react';

export const Pie = () => {
    return (
        <footer className=" py-4 mt-5 border border-2 " style={{ fontSize: "18px", backgroundColor: '#ffd1dc' }}>
    
            <div className="row px-4">
                
                <div className="col-md-6 mb-4 mb-md-0">
                    <h5 className="fw-bold mb-3 fs-4">©2026 Derechos</h5>
                    
                    <div className="mb-2">
                        <span className="fw-bold d-inline-block" style={{ width: '100px' }}>Instagram:</span> 
                        <a href="#" className="text-primary text-decoration-none fw-bold">Link</a>
                    </div>
                    <div className="mb-2">
                        <span className="fw-bold d-inline-block" style={{ width: '100px' }}>Facebook:</span> 
                        <a href="#" className="text-primary text-decoration-none fw-bold">Link</a>
                    </div>
                    <div className="mb-2">
                        <span className="fw-bold d-inline-block" style={{ width: '100px' }}>LinkedIn:</span> 
                        <a href="#" className="text-primary text-decoration-none fw-bold">Link</a>
                    </div>
                </div>

                <div className="col-md-6">
                    <h5 className="fw-bold mb-3 fs-4">Información Relevante</h5>
                    
                    <div className="mb-2">
                        <span className="fw-bold d-inline-block" style={{ width: '100px' }}>Ubicación:</span> 
                        <span>Las Dalias 25, Coltauco.</span>
                    </div>
                    <div className="mb-2">
                        <span className="fw-bold d-inline-block" style={{ width: '100px' }}>Fono:</span> 
                        <span>985467967.</span>
                    </div>
                    <div className="mb-2">
                        <span className="fw-bold d-inline-block" style={{ width: '100px' }}>Director:</span> 
                        <span>Ivana Vidal.</span>
                    </div>
                </div>

            </div>
        </footer>
    )
}
