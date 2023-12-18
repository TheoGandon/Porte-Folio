import React from 'react';
import { motion } from 'framer-motion';
import './css/Competences.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

const Competences = () => {
  return (
    <div>
      <Navbar />
    <div className="competences-container">
      <motion.div
        className="competence"
        whileHover={{ scale: 1.1, originX: 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <h3>Gérer le patrimoine informatique</h3>
      </motion.div>
      
      <motion.div
        className="competence"
        whileHover={{ scale: 1.1, originX: 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <h3>CSS</h3>
      </motion.div>
      
      <motion.div
        className="competence"
        whileHover={{ scale: 1.1, originX: 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <h3>JavaScript</h3>
      </motion.div>
    </div>
    <Footer />
    </div>
  );
};

export default Competences;
