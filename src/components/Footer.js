import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'; // Import des icônes
import '../css/Footer.css';
import '../App.css'

const Footer = () => {
  return (
    <motion.footer
      className='footer'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h3>Contactez-moi</h3>
        <p>Email: theo.gandon9@gmail.com</p>
        <p>Téléphone: +33 6 76 63 61 02</p>
      </div>
      <div>
        <h3>Suivez-moi</h3>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="#">
            <FaLinkedin size={30} />
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="#">
            <FaTwitter size={30} />
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="#">
            <FaGithub size={30} />
          </a>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
