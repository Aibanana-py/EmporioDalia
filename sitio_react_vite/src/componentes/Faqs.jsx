import React from 'react'

export const Faqs = () => {
  return (
    <div className="container mt-4 mb-5" style={{ maxWidth: '850px' }}>
            
            <h2 className="text-center fw-bold mb-4">Preguntas Frecuentes (FAQS)</h2>

           
            <div className="accordion" id="acordeonFaqs">

                <div className="accordion-item mb-2 border border-2 border-dark rounded-0">
                    <h2 className="accordion-header" id="tituloUno">
                        <button className="accordion-button fw-bold text-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#colapsoUno" aria-expanded="true" aria-controls="colapsoUno" style={{ backgroundColor: 'pink' }}>
                            ¿El uso del sitio web tiene algún costo?
                        </button>
                    </h2>
                    <div id="colapsoUno" className="accordion-collapse collapse show" aria-labelledby="tituloUno" data-bs-parent="#acordeonFaqs">
                        <div className="accordion-body bg-white border-top border-2 border-dark text-center">
                            No, navegar por nuestro sitio web, revisar nuestra carta digital y leer las noticias de Emporio Dalia es completamente gratuito.
                        </div>
                    </div>
                </div>

                <div className="accordion-item mb-2 border border-2 border-dark rounded-0">
                    <h2 className="accordion-header" id="tituloDos">
                        <button className="accordion-button collapsed fw-bold text-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#colapsoDos" aria-expanded="false" aria-controls="colapsoDos" style={{ backgroundColor: 'pink' }}>
                            ¿Puedo acceder al sitio desde dispositivos móviles?
                        </button>
                    </h2>
                    <div id="colapsoDos" className="accordion-collapse collapse show" aria-labelledby="tituloDos" data-bs-parent="#acordeonFaqs">
                        <div className="accordion-body bg-white border-top border-2 border-dark text-center">
                            ¡Por supuesto! Nuestro sitio está optimizado para que puedas ver nuestros postres y hamburguesas cómodamente desde tu celular o tablet.
                        </div>
                    </div>
                </div>

                <div className="accordion-item mb-2 border border-2 border-dark rounded-0">
                    <h2 className="accordion-header" id="tituloTres">
                        <button className="accordion-button collapsed fw-bold text-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#colapsoTres" aria-expanded="false" aria-controls="colapsoTres" style={{ backgroundColor: 'pink' }}>
                            ¿Es seguro ingresar mis datos personales en este sitio?
                        </button>
                    </h2>
                    <div id="colapsoTres" className="accordion-collapse collapse" aria-labelledby="tituloTres" data-bs-parent="#acordeonFaqs">
                        <div className="accordion-body bg-white border-top border-2 border-dark text-center">
                            Totalmente seguro. Utilizamos protocolos de desarrollo seguro para garantizar que tu información de registro esté protegida en todo momento.
                        </div>
                    </div>
                </div>

                <div className="accordion-item mb-2 border border-2 border-dark rounded-0">
                    <h2 className="accordion-header" id="tituloCuatro">
                        <button className="accordion-button collapsed fw-bold text-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#colapsoCuatro" aria-expanded="false" aria-controls="colapsoCuatro" style={{ backgroundColor: 'pink' }}>
                            ¿Cómo puedo actualizar mis datos personales?
                        </button>
                    </h2>
                    <div id="colapsoCuatro" className="accordion-collapse collapse" aria-labelledby="tituloCuatro" data-bs-parent="#acordeonFaqs">
                        <div className="accordion-body bg-white border-top border-2 border-dark text-center">
                            Puedes actualizar tu perfil directamente iniciando sesión en tu cuenta desde el botón "Login" ubicado en el menú superior de nuestra página.
                        </div>
                    </div>
                </div>

                <div className="accordion-item mb-2 border border-2 border-dark rounded-0">
                    <h2 className="accordion-header" id="tituloCinco">
                        <button className="accordion-button collapsed fw-bold text-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#colapsoCinco" aria-expanded="false" aria-controls="colapsoCinco" style={{ backgroundColor: 'pink' }}>
                            ¿Olvidé mi contraseña, cómo puedo recuperarla?
                        </button>
                    </h2>
                    <div id="colapsoCinco" className="accordion-collapse collapse" aria-labelledby="tituloCinco" data-bs-parent="#acordeonFaqs">
                        <div className="accordion-body bg-white border-top border-2 border-dark text-center">
                            Al hacer clic en "Login", encontrarás un enlace azul que dice "¿Olvidaste tu contraseña?". Haz clic ahí y sigue las instrucciones.
                        </div>
                    </div>
                </div>

                <div className="accordion-item mb-2 border border-2 border-dark rounded-0">
                    <h2 className="accordion-header" id="tituloSeis">
                        <button className="accordion-button collapsed fw-bold text-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#colapsoSeis" aria-expanded="false" aria-controls="colapsoSeis" style={{ backgroundColor: 'pink' }}>
                            ¿Cómo puedo contactar al servicio de atención al cliente?
                        </button>
                    </h2>
                    <div id="colapsoSeis" className="accordion-collapse collapse" aria-labelledby="tituloSeis" data-bs-parent="#acordeonFaqs">
                        <div className="accordion-body bg-white border-top border-2 border-dark text-center">
                            Puedes contactarnos llamando a nuestro número telefónico directo, o hablándonos por nuestras redes sociales (Instagram y Facebook) que aparecen al fondo de la página.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}