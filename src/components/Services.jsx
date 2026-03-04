import React from 'react';
import './Services.css';

export default function Services() {
    const servicesList = [
        {
            title: "Desarrollo Web & Landing Pages",
            description: "Sitios de alto impacto diseñados para convertir visitantes en clientes.",
            icon: "🌐"
        },
        {
            title: "Sistemas a la Medida (ERP/CRM)",
            description: "Gestiona inventarios, ventas y clientes con herramientas creadas para tu flujo real.",
            icon: "📊"
        },
        {
            title: "Aplicaciones Móviles",
            description: "Lleva tu negocio al bolsillo de tus clientes con apps nativas y fluidas.",
            icon: "📱"
        },
        {
            title: "Automatización de Tareas",
            description: "Reducimos errores humanos automatizando procesos repetitivos en tu operación.",
            icon: "⚙️"
        }
    ];

    return (
        <section className="services-section" id="servicios">
            <div className="services-container">
                <h2 className="services-title">Soluciones que impulsan tu <span className="highlight">crecimiento</span></h2>

                <div className="services-grid">
                    {servicesList.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-card-title">{service.title}</h3>
                            <p className="service-card-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}