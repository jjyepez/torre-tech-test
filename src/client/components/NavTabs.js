import React from 'react';
import { Link } from 'react-router-dom';

import './css/NavTabs.css';

export default function NavTabs(props) {
   return (
      <div className="NavTabs row m-3">
         <Link to="/people" className="col-6 text-center">PERSONAS</Link>
         <Link to="/jobs" className="col-6 text-center">EMPLEOS</Link>
      </div>
   )
}
