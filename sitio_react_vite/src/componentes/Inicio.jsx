import React from 'react';
import p1 from '../imagenes/publicidad1.jpg';
import p2 from '../imagenes/publicidad2.jpg';
import p3 from '../imagenes/publicidad3.jpg';
import p4 from '../imagenes/publicidad4.jpg';
import p5 from '../imagenes/publicidad5.jpg';
import ceo from '../imagenes/ceo.jpg'
import n1 from '../imagenes/noticia1.jpg'
import n2 from '../imagenes/noticia2.jpg'
import n3 from '../imagenes/noticia3.jpg'

export const Inicio = () => {
    return (
        <div className="container mt-4">
            <div className="row mb-5">
                <div className="col-12">
                    <div className="card shadow-sm border-0" style={{ backgroundColor: '#ffd1dc', borderRadius: '15px' }}>
                        <div className="card-body p-4">
                            <h3 className="card-title text-center fw-bold mb-3">Nuestra Misión</h3>
                            <p className="card-text text-dark" style={{ fontSize: '18px', textAlign: 'justify', lineHeight: '1.6' }}>
                                "En Emporio Dalia fusionamos la alta cocina de autor con la calidez de un espacio diseñado para el bienestar. Nuestra misión es transformar cada visita en una experiencia sensorial memorable, ofreciendo preparaciones gastronómicas excepcionales elaboradas con ingredientes locales frescos, una pastelería delicada y una atención impecable que hace sentir a cada comensal en su propio hogar."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="carouselExampleCaptions" className="carousel slide shadow-sm mb-5" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={p1} className="d-block w-100" alt="Banner 1" style={{ maxHeight: '400px', objectFit: 'cover' }} />
                        <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '10px', padding: '10px' }}>
                            <h5 className="fw-bold" style={{ fontSize: '30px' }}>Sabor, Arte y Tradición</h5>
                            <p className="fs-5">Descubre nuestra nueva carta de temporada y déjate envolver por la magia culinaria.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={p2} className="d-block w-100" alt="Banner 2" style={{ maxHeight: '400px', objectFit: 'cover' }} />
                        <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '10px', padding: '10px' }}>
                            <h5 className="fw-bold" style={{ fontSize: '30px' }}>Pastelería Delicada</h5>
                            <p className="fs-5">Haz de tu tarde un momento inolvidable con nuestra repostería de autor.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={p3} className="d-block w-100" alt="Banner 3" style={{ maxHeight: '400px', objectFit: 'cover' }} />
                        <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '10px', padding: '10px' }}>
                            <h5 className="fw-bold" style={{ fontSize: '30px' }}>Ingredientes Locales</h5>
                            <p className="fs-5">Apoyamos a nuestros agricultores de la región con productos 100% orgánicos.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={p4} className="d-block w-100" alt="Banner 4" style={{ maxHeight: '400px', objectFit: 'cover' }} />
                        <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '10px', padding: '10px' }}>
                            <h5 className="fw-bold" style={{ fontSize: '30px' }}>Ambiente Acogedor</h5>
                            <p className="fs-5">Un espacio diseñado con amor para tu bienestar y el de tus seres queridos.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={p5} className="d-block w-100" alt="Banner 5" style={{ maxHeight: '400px', objectFit: 'cover' }} />
                        <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '10px', padding: '10px' }}>
                            <h5 className="fw-bold" style={{ fontSize: '30px' }}>Eventos Especiales</h5>
                            <p className="fs-5">Reserva nuestro salón y haz que tus celebraciones sean verdaderamente memorables.</p>
                        </div>
                    </div>
                </div>
                
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
            <div className="mb-5">
                <div className="row mb-3 g-3">
                    <div className="col-md-3">
                        <div className="border border-2 border-dark h-100 d-flex flex-column justify-content-center align-items-center bg-white p-2" style={{ minHeight: '120px' }}>
                            <h3>Nuevo Integrante</h3>
                            <img src={n1} className="d-block w-100" alt="Not Found" style={{ maxHeight: '200px', objectFit: 'cover' }} />
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="border border-2 border-dark h-100 d-flex align-items-center bg-white p-3">
                            <p className="mb-0">
                                Le damos la bienvenida a "Moka", nuestro nuevo michi rescatado que ahora es el anfitrión oficial y guardián de las buenas energías en Emporio Dalia.
                                <a href="/noticia1" className="ms-2 fw-bold text-primary"> (Link)</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 g-3">
                    <div className="col-md-3">
                        <div className="border border-2 border-dark h-100 d-flex flex-column justify-content-center align-items-center bg-white p-2" style={{ minHeight: '120px' }}>
                            <h3>Menu de Temporada</h3>
                            <img src={n2} className="d-block w-100" alt="Not Found" style={{ maxHeight: '200px', objectFit: 'cover' }} />
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="border border-2 border-dark h-100 d-flex align-items-center bg-white p-3">
                            <p className="mb-0">
                                Nuestro equipo ha diseñado un menú de invierno que rescata sabores caseros con cremas calientes, repostería especiada y café de especialidad.
                                <a href="/noticia2" className="ms-2 fw-bold text-primary"> (Link)</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 g-3">
                    <div className="col-md-3">
                        <div className="border border-2 border-dark h-100 d-flex flex-column justify-content-center align-items-center bg-white p-2" style={{ minHeight: '120px' }}>
                            <h3>Masterclass</h3>
                            <img src={n3} className="d-block w-100" alt="Not Found" style={{ maxHeight: '200px', objectFit: 'cover' }} />
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="border border-2 border-dark h-100 d-flex align-items-center bg-white p-3">
                            <p className="mb-0">
                                Aficionados y amantes del dulce se dieron cita en nuestro salón para aprender los secretos de la repostería fina en nuestro primer taller práctico.
                                <a href="/noticia3" className="ms-2 fw-bold text-primary"> (Link)</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mb-4">
                <div className="col-md-8">
                    <div className="card border-dark">
                        <div className="card-body text-center">
                            <h5 className="card-title fw-bold text-decoration-underline">Estudiante</h5>
                            <img src = {ceo} className="mx-auto d-block w-50  rounded-circle " ></img>
                            <p className="mb-1"><strong>Nombre:</strong> Ivana Antonia Vidal Lizana</p>
                            <p className="mb-1"><strong>Carrera:</strong> Analista Programador - 2do Año</p>
                            <p className="mb-0"><strong>Seccion:</strong> TI3031/D-IEI-N3-P2-C4(E-F)/D</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}