import React from 'react';
import './Footer.css';
import netcoSymbol from '../assets/netco-symbol.png';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <div className="navbar-brand">
                        <span className="brand-text">NetC</span>
                        <img src={netcoSymbol} alt="NetCo Symbol" className="brand-symbol" />
                    </div>
                    <p className="footer-slogan">Impulsando la transformación digital de las PyMEs con software a medida.</p>
                </div>

                <div className="footer-contact">
                    <h4>Contacto directo</h4>
                    <a href="https://wa.me/tu-numero" className="footer-whatsapp">
                        <span>🟢</span> WhatsApp: +52 XXX XXX XXXX
                    </a>
                    <p>contacto@netco.com</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} NetCo Software Solutions. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}