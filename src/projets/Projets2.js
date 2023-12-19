import React from 'react';
import { motion } from 'framer-motion';
import '../css/Projet1.css';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const Projet1 = () => {
  return (
    <div>
        <Navbar />
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
      </motion.header>

      <motion.section
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="projects-section"
      >
        <h2>Projet ...</h2>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="project"
        >
          <h3>Projet 1</h3>
          <p>Description du projet 1...</p>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Projet1;