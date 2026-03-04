import React from 'react';
import './WorkProcess.css';

export default function WorkProcess() {
    const steps = [
        {
            number: "01",
            title: "Diagnóstico",
            description: "Analizamos tu forma de trabajar actual para identificar dónde podemos ahorrarte tiempo y dinero."
        },
        {
            number: "02",
            title: "Prototipado",
            description: "Diseñamos una solución visual para que veas cómo funcionará tu sistema antes de escribir una sola línea de código."
        },
        {
            number: "03",
            title: "Desarrollo Ágil",
            description: "Construimos el software con entregas constantes para que puedas probar los avances en tiempo real."
        },
        {
            number: "04",
            title: "Lanzamiento",
            description: "Implementamos la solución en tu negocio y capacitamos a tu equipo para asegurar el éxito total."
        }
    ];

    return (
        <section className="process-section" id="proceso">
            <div className="process-container">
                <div className="process-header">
                    <h2 className="process-title">Nuestro camino al <span className="highlight-green">éxito</span></h2>
                    <p className="process-subtitle">Un proceso transparente y diseñado para que tu software esté listo en tiempo récord.</p>
                </div>

                <div className="process-grid">
                    {steps.map((step, index) => (
                        <div className="process-step" key={index}>
                            <div className="step-number-container">
                                <span className="step-number">{step.number}</span>
                                {index !== steps.length - 1 && <div className="step-line"></div>}
                            </div>
                            <div className="step-content">
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}