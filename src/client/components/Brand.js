import React from 'react';

import { Link } from 'react-router-dom';

import './css/Brand.css';

export default function Brand() {
   return (
      <div className="Brand">

         <Link to="/">
            <img src="/img/favicon.jpg" />
            <span className="ml-2">TTT v.0</span>
         </Link>

      </div>
   )
}