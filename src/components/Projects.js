import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'Tranqui APP', description: 'La Facultad de Psicología de Mar del Plata necesitaba abordar la prevención del suicidio adolescente y carecía de recursos y herramientas digitales. Un equipo de 6 estudiantes desarrolló una app móvil multiplataforma usando Ionic y React, enfocada en adolescentes. Colaboramos con profesionales de salud mental para validar el contenido y lanzamos la app con éxito, alcanzando 1600 usuarios y obteniendo cobertura en medios locales. El feedback positivo de usuarios y expertos nos permitió seguir mejorando la aplicación.' },
    { title: 'Grucar', description: 'La empresa de grúas operaba con procesos manuales y necesitaba digitalizarse. Nuestro equipo de tres desarrolló un sistema de gestión a medida usando Next.js, Typescript y Supabase. Implementamos roles de usuario, modernizamos sus procesos, y utilizamos IA para optimizar el desarrollo. Entregamos funcionalidades en fases para obtener feedback. El sistema digital mejoró significativamente la eficiencia operativa, eliminando procesos manuales, y recibimos comentarios positivos por su facilidad de uso y adaptabilidad.' },
  ];

  return (
    <section>
      <h2>Proyectos</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
