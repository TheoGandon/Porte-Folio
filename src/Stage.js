import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './css/Stage.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

const stages = [
  {
    company: 'Entreprise 1',
    role: 'Développeur Web Junior',
    duration: 'Janvier 2022 - Juin 2022',
    description: 'Description détaillée du stage chez Entreprise 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique consectetur urna, vel luctus metus aliquam et. Sed vel eleifend sapien. Proin euismod tempor erat, id consequat odio congue vel. Duis vel tristique lectus. Nulla facilisi.',
    tasks: ['Développement et maintenance de sites web', 'Collaboration avec l\'équipe technique', 'Résolution de problèmes techniques'],
  },
  {
    company: 'Entreprise 2',
    role: 'Développeur Front-end',
    duration: 'Juillet 2022 - Décembre 2022',
    description: 'Description détaillée du stage chez Entreprise 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique consectetur urna, vel luctus metus aliquam et. Sed vel eleifend sapien. Proin euismod tempor erat, id consequat odio congue vel. Duis vel tristique lectus. Nulla facilisi.',
    tasks: ['Conception et développement d\'interfaces utilisateur', 'Optimisation des performances front-end', 'Intégration avec des API externes'],
  },
];

const Stage = () => {
  return (
    <div className="app">
      <Navbar />
      <AnimatePresence>
        <div className="stages">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              className="stage"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2>{stage.company}</h2>
              <p className="role">{stage.role}</p>
              <p className="duration">{stage.duration}</p>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}>
                {stage.description}
              </motion.p>
              <div className="tasks">
                <strong>Tâches principales :</strong>
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                >
                  {stage.tasks.map((task, taskIndex) => (
                    <motion.li key={taskIndex} initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: taskIndex * 0.1 }}>
                      {task}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Stage;
