import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import { TbMailFilled } from "react-icons/tb";
import { FaMessage } from "react-icons/fa6";
import { VscSymbolNamespace } from "react-icons/vsc";
import './css/Contact.css';

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

function Contact() {
  return (
    <div className="App">
      <Navbar />
      <div className='Contact'>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <motion.div className="Contact-main" variants={container} initial="hidden" animate="visible">
          <motion.div className="text" variants={item}>
            Contact
          </motion.div>
          <motion.div className="input" variants={item}>
            <div className="icon">
              <VscSymbolNamespace size={30}/>
            </div>
            <input type="text" placeholder="Nom" />
          </motion.div>
          <motion.div className="input" variants={item}>
            <div className="icon">
              <TbMailFilled size={30} />
            </div>
            <input type="text" placeholder="Email Address" />
          </motion.div>
          <motion.div className="input" variants={item}>
            <div className="icon">
              <FaMessage size={30}/>
            </div>
            <input type="text" placeholder="Message" />
          </motion.div>
          <motion.button className="Send-button" whileHover={{ scale: 1.05 }} variants={item}>
            Envoyer
          </motion.button>
        </motion.div>
      </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
