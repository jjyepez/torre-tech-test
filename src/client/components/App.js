import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';

export default function App(props) {
   return (
      <Router>
         <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand mb-0 h1">TTT v.0</span>
         </nav>
      </Router>
   );
}