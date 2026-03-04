import React from 'react';
import './ProblemSolution.css';

const ProblemSolution = () => {
    const points = [
        {
            problem: "Tareas manuales y lentas",
            solution: "Automatización total de procesos",
            description: "Deja de depender de hojas de cálculo infinitas y procesos que quitan tiempo valioso."
        },
        {
            problem: "Falta de control de datos",
            solution: "Información en tiempo real",
            description: "Visualiza tus ventas, inventarios y clientes desde cualquier lugar con un solo clic."
        },
        {
            problem: "Sistemas genéricos y complejos",
            solution: "Software hecho a tu medida",
            description: "No te adaptes a una herramienta; nosotros creamos una herramienta que se adapte a ti."
        }
    ];

    return (
        <section className="ps-section" id="solucion">
            <div className="ps-container">
                <div className="ps-header">
                    <h2 className="ps-title">La tecnología debe ser tu <span className="highlight-text">aliada</span>, no un obstáculo</h2>
                    <p className="ps-subtitle">Entendemos los retos de las PyMEs porque hablamos el mismo idioma que tú.</p>
                </div>

                <div className="ps-grid">
                    {points.map((item, index) => (
                        <div className="ps-card" key={index}>
                            <div className="card-status status-problem">El Problema: {item.problem}</div>
                            <div className="card-status status-solution">Con NetCo: {item.solution}</div>
                            <p className="card-description">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;