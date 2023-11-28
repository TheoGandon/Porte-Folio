// Main.js
import React from 'react';
import "./App.css";
import "./css/Main.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Profile from './Asset/profile.png';
import { motion } from "framer-motion";

function Main() {
  return (
    <div className="App">
      <Navbar />
      <div className="wave-container">
        <motion.div className="wave" animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity }}>
          <motion.div className="wave-inner" animate={{ y: [0, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} />
        </motion.div>
        <img src={Profile} alt="Profile" className="image" />
      </div>
      <div className="text-container">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
