import React from 'react';

import './css/Loader.css';

export default function Loader(props) {
   return (
      <div className="Loader container-fluid text-center">
         <div className="spinner-border text-secondary" style={{ width: '3rem', height: '3rem' }} role="status">
            <span className="sr-only">Loading...</span>
         </div>
      </div>
   )
}
