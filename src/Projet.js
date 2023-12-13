import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './css/Projet.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

const projects = [
  {
    title: 'Projet 1',
    description: 'Description détaillée du Projet 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique consectetur urna, vel luctus metus aliquam et. Sed vel eleifend sapien. Proin euismod tempor erat, id consequat odio congue vel. Duis vel tristique lectus. Nulla facilisi.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    demoLink: 'https://exemple-demo-projet1.com',
    githubLink: 'https://github.com/votre-utilisateur/projet1',
  },
  {
    title: 'Projet 2',
    description: 'Description détaillée du Projet 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique consectetur urna, vel luctus metus aliquam et. Sed vel eleifend sapien. Proin euismod tempor erat, id consequat odio congue vel. Duis vel tristique lectus. Nulla facilisi.',
    technologies: ['Angular', 'Spring Boot', 'MySQL'],
    demoLink: 'https://exemple-demo-projet2.com',
    githubLink: 'https://github.com/votre-utilisateur/projet2',
  },
  {
    title: 'Projet 3',
    description: 'Description détaillée du Projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique consectetur urna, vel luctus metus aliquam et. Sed vel eleifend sapien. Proin euismod tempor erat, id consequat odio congue vel. Duis vel tristique lectus. Nulla facilisi.',
    technologies: ['Vue.js', 'Express', 'Firebase'],
    demoLink: 'https://exemple-demo-projet3.com',
    githubLink: 'https://github.com/votre-utilisateur/projet3',
  },
];

const Projet = () => {
  return (
    <div className="app">
      <Navbar />
      <AnimatePresence>
        <div className="projects">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2>{project.title}</h2>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}>
                {project.description}
              </motion.p>
              <div className="technologies">
                <strong>Technologies utilisées:</strong>
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.li key={techIndex} initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: techIndex * 0.1 }}>
                      {tech}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              <div className="links">
                <strong>Liens:</strong>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.5 + index * 0.2 }}>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Démo</a>
                </motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.7 + index * 0.2 }}>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Projet;
