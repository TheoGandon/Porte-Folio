// NavBar.js
import React from 'react';
import { motion } from 'framer-motion';
import '../css/NavBar.css';
import Typewriter from 'typewriter-effect';

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  
const Navbar = () => {
  return (
    <motion.div
      className='nav-main'
      variants={container} initial="hidden" animate="visible">
      <div className='nav-title'>
      <Typewriter options={{autoStart: true, loop:true, delay:50, strings:'Theo Gandon'}} variants={item}/>
      </div>
      <div className='nav-linker'>
        <motion.div className='nav-link' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} variants={item}>
          <a href="/">Accueil</a>
        </motion.div>
        <motion.div className='nav-link' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} variants={item}>
          <a href="/presentation">Présentation</a>
        </motion.div>
        <motion.div className='nav-link' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} variants={item}>
          <a href="#">Compétences</a>
        </motion.div>
        <motion.div className='nav-link' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} variants={item}>
          <a href="/projet">Projets</a>
        </motion.div>
        <motion.div className='nav-link' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} variants={item}>
          <a href="/stage">Stages</a>
        </motion.div>
        <motion.div className='nav-link' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} variants={item}>
          <a href="#">Activité</a>
        </motion.div>
        <motion.div className='nav-link' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} variants={item}>
          <a href="/contact">Contact</a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;
