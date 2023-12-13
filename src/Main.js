// Main.js
import "./css/Main.css";
import React from 'react';
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';


function Main() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="title-main">Bienvenue sur mon portfolio clicquer sur l'ordinateur pour commencer</h1>
      <Footer />
    </div>
  );
}

export default Main;
