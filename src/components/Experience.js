import React from 'react';

const Experience = () => {
  const experiences = [
    { title:  'Grucar', description: 'Trabajo en Equipo Dominio de Tecnologías Modernas: Familiarización con Next.js, React, Typescript, Supabase, Postgres, Tailwind y Shadcn. Uso de Inteligencia Artificial: Implementación de herramientas de IA para optimizar el desarrollo.Comunicación con el Cliente: Mejora en habilidades de comunicación y comprensión de las necesidades del cliente. Enfoque Iterativo: Aprendizaje sobre la importancia del feedback temprano y la flexibilidad en el desarrollo de software.' },
    { title: 'Tranqui App', description: 'Trabajo en Equipo Tecnologías Elegidas: Utilizamos Ionic con React y Capacitor, lo que me permitió adquirir experiencia en desarrollo multiplataforma y mejorar mis habilidades en Typescript y SCSS' },
  ];

  return (
    <section>
      <h2>Experiencia</h2>
      <ul>
        {experiences.map((experience, index) => (
          <li key={index}>
            <h3>{experience.title}</h3>
            <p>{experience.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
