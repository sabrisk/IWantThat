import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";

import Events from './Events';
import Details from './Details';

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
      <AnimatePresence>
        <Routes location={location} key={location.pathname} >
            <Route path="/" element={<Events />} />
            <Route path="/details/:id/:name/:gifts" element={<Details />} />
        </Routes>
      </AnimatePresence>
  );
}

export default AnimatedRoutes;



