import React from 'react';

import './css/MainContent.css';

export default function MainContent(props) {
   return (
      <div className="MainContent container">

         {props.children}

      </div>
   )
}