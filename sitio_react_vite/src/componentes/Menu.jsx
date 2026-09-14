import React from 'react'
import logo from '../imagenes/logo.jpg'
import { NavLink } from 'react-router-dom'

export const Menu = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img src={ logo } width={ 100 } alt="No Encontrado" />
                    <a className="navbar-brand" href="#">
                        <h1> <NavLink to = "/" >Emporio Dalia</NavLink></h1>
                        </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                           <h4> <NavLink to = "galeria" className="nav-link text-center" href="#">Galeria</NavLink></h4>
                            <h4><NavLink to = "faqs" className="nav-link text-center" href="#">FAQS</NavLink></h4>
                            <h4><NavLink to = "testimonios" className="nav-link text-center" href="#">Testimonios</NavLink></h4>
                            <h4><NavLink to = "login" className="nav-link text-center" href="#">Login</NavLink></h4>
                            <h4><NavLink to = "procesar" className="nav-link text-center" href="#">Reservas</NavLink></h4>
                            <h4><NavLink to = "api" className="nav-link text-center" href="#">API</NavLink></h4>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
