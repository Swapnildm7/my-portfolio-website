// src/components/AnimatedRoutes.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "../components/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Certificates from "../pages/Certificates";
import Contact from "../pages/ContactForm";
import Resume from "../pages/Resume";

const pageFlipVariants = {
  initial: { rotateY: 90, opacity: 0 },
  animate: { rotateY: 0, opacity: 1, transition: { duration: 0.6 } },
  exit: { rotateY: -90, opacity: 0, transition: { duration: 0.6 } },
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageFlipVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              variants={pageFlipVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              variants={pageFlipVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Projects />
            </motion.div>
          }
        />
        <Route
          path="/resume"
          element={
            <motion.div
              variants={pageFlipVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Resume />
            </motion.div>
          }
        />
        <Route
          path="/certificates"
          element={
            <motion.div
              variants={pageFlipVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Certificates />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              variants={pageFlipVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Contact />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
