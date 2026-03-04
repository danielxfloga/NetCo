import React, { useState } from 'react';
import './FAQ.css';

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "¿Cuánto tiempo tarda en estar listo mi software?",
            answer: "Depende de la complejidad, pero una solución para PyME suele tardar entre 4 a 8 semanas desde el diagnóstico hasta el lanzamiento."
        },
        {
            question: "¿El software será de mi propiedad?",
            answer: "Totalmente. Al finalizar el proyecto y liquidar el servicio, entregamos el código fuente y las credenciales. Tú eres el dueño de tu tecnología."
        },
        {
            question: "¿Ofrecen soporte técnico después de la entrega?",
            answer: "Sí, todos nuestros desarrollos incluyen un periodo de garantía y planes de mantenimiento opcionales para que nunca te quedes solo."
        },
        {
            question: "¿Necesito tener conocimientos técnicos?",
            answer: "Para nada. En NetCo nos encargamos de toda la complejidad técnica y te entregamos herramientas fáciles de usar, con capacitación incluida."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="faq-container">
                <h2 className="faq-title">Preguntas <span className="highlight-blue">Frecuentes</span></h2>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            key={index}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                {faq.question}
                                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}