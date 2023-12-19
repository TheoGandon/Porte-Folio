import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './css/Projet.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

const projects = [
  {
    title: 'Projet Poulailler',
    description: '"Gestion de Poulailler" est un jeu de simulation où vous démarrez avec un petit élevage de poules. Avec 50€, votre objectif est de maintenir la santé et le moral de vos poules, gérer l alimentation, la reproduction, et éviter maladies et parasites. Chaque jour est crucial, car les décisions impactent la production d œufs, la croissance des poussins, et la survie de votre élevage. Faites preuve de stratégie pour prospérer et éviter la défaite en maintenant un équilibre entre ressources et bien-être des poules.',
    technologies: ['Python'],
    link: '1'
  },
  {
    title: 'Projet Installation d une Infrastructure système & réseau pour un environnement Web',
    description: 'Mise en place d une architecture client-serveur virtuelle sous Linux avec VMware : serveur web (LAMP), contrôleur de domaine (Samba pour Active Directory, BIND pour DNS), serveur FTP. Application de réservation d hôtel déployée sur le serveur web, avec authentification via Active Directory. Configuration réseau interne. Test d authentification et accès au serveur FTP depuis une machine cliente.',
    technologies: ['PHPMyAdmin', 'Wamp', 'MySQL'],
    link: '2'
  },
  {
    title: 'Projet Symphony',
    description: '',
    technologies: ['Symphony', 'React JS', 'MySQL'],
    link: '3'
  },
  {
    title: 'Projet Base de données',
    description: 'Concevoir une base de données pour le Tour de France 2022 implique la création d un Modèle Conceptuel de Données (MCD) et d un Modèle Logique de Données (MLD). Cette base de données doit intégrer les entités telles que coureurs, équipes et étapes, permettant la gestion complète du Tour, y compris la saisie, la modification via des formulaires, et le calcul d indicateurs tels que les performances par coureur, équipe et étape.',
    technologies: ['MySQL'],
    link: '4'
  },
  {
    title: 'Projet Gestion d’un catalogue e-commerce',
    description: 'ACME souhaite un catalogue web pour sa collection de chaussures de sport haut de gamme avec gestion CRUD des catégories et des produits. Le site, accessible sur authentification, ne comporte pas de système de paiement. Les administrateurs ont des droits étendus, tandis que les commerciaux peuvent parcourir la collection, commander des produits, et voir  l historique de leurs commandes. Chaque produit affiche nom, référence, prix, et optionnellement une photo carrée. Le panier inclut nom, référence, pointure, prix, quantité, et sous-total. L application est développée sous Symfony, avec une authentification sécurisée, des tests fréquents en préproduction, et la conformité RGPD.',
    technologies: ['Symfony', 'React JS', 'MySQL'],
    link: '5'
  },
];

const Projet = () => {
  return (
    <div className="app">
      <Navbar />
      <AnimatePresence>
        <div className="projects">
          {projects.map((project, index) => (
            <a href={'projet' + project.link}>
            <motion.div
              key={index}
              className="project"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2>{project.title}</h2>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}>
                {project.description}
              </motion.p>
              <div className="technologies">
                <strong>Technologies utilisées:</strong>
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.li key={techIndex} initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: techIndex * 0.1 }}>
                      {tech}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
            </a>
          ))}
        </div>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Projet;
