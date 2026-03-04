// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';
import netcoSymbol from '../assets/netco-symbol.png'; // Importa tu símbolo

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                {/* El nombre de la marca con el símbolo remplazando la 'O' */}
                <span className="brand-text">NetC</span>
                <img src={netcoSymbol} alt="NetCo Symbol" className="brand-symbol" />
            </div>
            <div className="navbar-links">
                <a href="#servicios">Servicios</a>
                <a href="#proceso">Proceso</a>
                <button className="btn-small">Contacto</button>
            </div>
        </nav>
    );
};

export default Navbar;