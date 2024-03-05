import React, { useState } from 'react';

// import Events from './Events';
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from './AnimatedRoutes';

export default function App() {
  return (
    <div className='bg-[#2B2B2B] '>
      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  )
}