// src/components/Hero.jsx
import React from 'react';
import './Hero.css';
import netcoSymbol from '../assets/netco-symbol.png'; // También lo usaremos en grande aquí

const Hero = () => {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <h1 className="hero-title">
                    Potenciamos tu PyME con <span className="highlight">sistemas de software inteligentes.</span>
                </h1>
                <p className="hero-subtitle">
                    En NetCo diseñamos y desarrollamos soluciones digitales a medida que automatizan tus procesos, aumentan tus ventas y profesionalizan tu operación.
                </p>
                <div className="hero-buttons">
                    <button className="btn-primary">Cotizar mi proyecto</button>
                    <button className="btn-secondary">Explorar soluciones</button>
                </div>
            </div>

            {/* Visual del Hero: Usaremos el símbolo en grande con un efecto de brillo */}
            <div className="hero-visual">
                <div className="symbol-glow-container">
                    <img src={netcoSymbol} alt="NetCo Big Symbol" className="hero-symbol-large" />
                    <div className="glow-effect"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;