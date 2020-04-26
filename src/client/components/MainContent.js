import React from 'react';

export default function MainContent(props) {
   return (
      <div className="container mt-3">

         {props.children}

      </div>
   )
}