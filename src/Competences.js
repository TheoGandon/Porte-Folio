import React from 'react';
import { motion } from 'framer-motion';
import './css/Competences.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import { useState } from 'react';
import ModalPdf from './components/ModalPdf';
import Tableau_PF from './Asset/tableau_PF.pdf';


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
        <h3>Répondre aux incidents et aux demandes d’assistance et d’évolution</h3>
      </motion.div>
      
      <motion.div
        className="competence"
        whileHover={{ scale: 1.1, originX: 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <h3>Développer la présence en ligne de l’organisation</h3>
      </motion.div>
      <motion.div
        className="competence"
        whileHover={{ scale: 1.1, originX: 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <h3>Travailler en mode projet</h3>
      </motion.div>
      <motion.div
        className="competence"
        whileHover={{ scale: 1.1, originX: 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <h3>Mettre à disposition des utilisateurs un service informatique</h3>
      </motion.div>
      <motion.div
        className="competence"
        whileHover={{ scale: 1.1, originX: 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <h3>Organiser son développement professionnel</h3>
      </motion.div>
      
    </div>
    <div className='modalC'>
    <ModalPdf className="modalC" PDF={Tableau_PF}/>
    </div>
    
    <Footer />
    </div>
  );
};

export default Competences;
