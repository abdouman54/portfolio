import React from 'react';
import '../styles/Projects.css';
import GeoquizzImage from '../assets/Geoquizz.jpg';
import DeviseconverterImage from '../assets/curency app.jpg';

const projects = [
  {
    id: 1,
    title: 'Application de Quiz Geographie',
    description: 'Une application web permettant aux utilisateurs de tester leurs connaissances géographiques à travers divers quiz..',
    technologies: 'Android Studio, Java',
    image: GeoquizzImage,
  },
  {
    id: 2,
    title: 'Curency Converter',
    description: 'Une application web permettant aux utilisateurs de convertir des devises en temps réel.',
    technologies: 'C# ,Visual Studio',
    image: DeviseconverterImage,
  },
  // Ajoutez plus de projets ici
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>Mes Projets</h1>
      <div className="project-list">
        {projects.map((project) => (
          <div className="project-item" key={project.id}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p><strong>Technologies utilisées :</strong> {project.technologies}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
