import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import './css/Presentation.css';
import './App.css';
import CV from './Asset/CV.pdf';
import { FaPhp, FaSwift, FaCss3, FaHtml5, FaJs, FaDatabase, FaPython, FaReact, FaMobile, FaJava } from 'react-icons/fa';
import { SiSymfony } from 'react-icons/si';
import Modal from 'react-modal';
import { useState } from 'react';



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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const iconColors = [ 
  '#777BB4', 
  '#FF6C12',     
  '#000000',  
  '#2965F1', 
  '#E44D26',   
  '#F0DB4F',       
  '#00758F',   
  '#3776AB', 
  '#61DAFB',
  '#61DAFB',     
  '#5382A1',       
  ];

 
  const Card = ({ icon }) => {

    const index = skillsData.findIndex((skill) => skill.icon === icon);
    const iconElement = React.createElement(icon, { size: 200, color: iconColors[index % iconColors.length] });

    return (
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div className="splash" />
        <motion.div className="card" variants={cardVariants}>
          {iconElement}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="App">
      <Navbar />
      <div className="portfolio-container">
        <motion.div
          className="portfolio-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Présentation</h1>
          <p className='text-presentation'>
          Je suis Théo Gandon, étudiant en informatique à l'EPSI Lille. Passionné par les technologies émergentes et l'innovation, je m'efforce de développer mes compétences dans le vaste monde de l'informatique. Mon portfolio est le reflet de mon parcours académique et de mes projets personnels, mettant en lumière ma créativité et mon engagement envers l'excellence technique. Explorez mon univers numérique et découvrez les différentes facettes de mon parcours informatique. Bienvenue dans mon monde technologique.
          </p>
          <div className="buttons-container">
            <a href={CV} target="_blank" rel="noopener noreferrer" download>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                Télécharger CV
              </motion.button>
            </a>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={openModal}>Visualiser CV </motion.button>
            <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="CV Modal" className='modal'>
              <button className='close-cv' onClick={closeModal}>Fermer</button>
              <iframe title="CV" src={CV} style={{ width: '100%', height: '800px' }} />
            </Modal>
          </div>
        </motion.div>
      </div>
      <div className="skill-bg">
        <div className="skills-container">
          <h2>Compétences</h2>
          <motion.div
            className="icons-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {skillsData.map((skill, index) => (
              <Card key={index} icon={skill.icon} />
            ))}
          </motion.div>
        </div>
        <div className="test-container">
          <h2>??????????????</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Presentation;
