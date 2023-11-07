// RouteComponent.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './test'; // Assurez-vous que le chemin d'importation est correct

const RouteComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Menu />} />
            </Routes>
        </Router>
    );
};

export default RouteComponent;
