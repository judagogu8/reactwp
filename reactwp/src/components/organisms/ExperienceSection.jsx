import React from 'react';
import ExperienceCard from '../atoms/ExperienceCard';

const ExperienceSection = () => {
    return (
        <section className="px-6 py-10" id="experience">
            <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Experiencia</h2>

            <div className="max-w-4xl mx-auto">
                <ExperienceCard
                    title="Práctica de Ingeniería"
                    company="INTERELECTRICAS S.A"
                    location="Bogotá, Colombia"
                    date="Junio 2024 - Julio 2024"
                    description={[
                        "Gestioné la información del sitio web de la empresa, actualizando inventarios y productos.",
                        "Utilicé Excel para el análisis de datos y generación de reportes."
                    ]}
                />
                <ExperienceCard
                    title="Monitoría Administrativa"
                    company="Pontificia Universidad Javeriana"
                    location="Bogotá, Colombia"
                    date="Marzo 2023 – Junio 2024"
                    description={[
                        "Apoyé los procesos administrativos del departamento, colaborando en la organización y gestión de actividades académicas y administrativas.",
                        "Participé en la coordinación de eventos académicos y en la asignación de recursos."
                    ]}
                />
            </div>
        </section>
    );
};

export default ExperienceSection;
