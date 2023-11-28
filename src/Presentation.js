import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import './css/Presentation.css';
import './App.css';
import CV from './Asset/CV.pdf';
import { FaPhp, FaSwift, FaCss3, FaHtml5, FaJs, FaDatabase, FaPython, FaReact, FaMobile, FaJava } from 'react-icons/fa';
import { SiSymfony } from 'react-icons/si';

const skillsData = [
  { name: 'PHP', icon: FaPhp, documentationLink: 'https://php.net/docs.php' },
  { name: 'Swift', icon: FaSwift, documentationLink: 'https://developer.apple.com/documentation/swift' },
  { name: 'Symfony', icon: SiSymfony, documentationLink: 'https://symfony.com/doc/current/index.html' },
  { name: 'CSS', icon: FaCss3, documentationLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'HTML', icon: FaHtml5, documentationLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'JavaScript', icon: FaJs, documentationLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'MySQL', icon: FaDatabase, documentationLink: 'https://dev.mysql.com/doc/' },
  { name: 'Python', icon: FaPython, documentationLink: 'https://docs.python.org/3/' },
  { name: 'React.js', icon: FaReact, documentationLink: 'https://reactjs.org/docs/getting-started.html' },
  { name: 'React Native', icon: FaMobile, documentationLink: 'https://reactnative.dev/docs/getting-started' },
  { name: 'Java', icon: FaJava, documentationLink: 'https://docs.oracle.com/en/java/javase/16/' },
];

const Presentation = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className="portfolio-container">
        <motion.div
          className="portfolio-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Présentation</h1>
          <p>
            Bienvenue sur mon portfolio ! Je suis passionné par [votre domaine d'expertise]. J'ai travaillé sur plusieurs projets
            passionnants et j'ai acquis des compétences solides en [votre domaine de compétence]. Explorez mon portfolio pour en
            savoir plus sur mon parcours et mes réalisations.
          </p>
          <div className="buttons-container">
            <a href={CV} target="_blank" rel="noopener noreferrer" download>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                Télécharger CV
              </motion.button>
            </a>
            <a href={CV} target="_blank" rel="noopener noreferrer">
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                Visualiser CV
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
      <div className='skill-bg'>
      <div className="skills-container">
        <h2>Compétences</h2>
        <motion.div
          className="icons-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {skillsData.map((skill, index) => (
            <motion.div key={index} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <a href={skill.documentationLink} target="_blank" rel="noopener noreferrer">
                {React.createElement(skill.icon, { size: 60, color: '#555' })}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default Presentation;
