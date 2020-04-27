import React from 'react';

import './css/PageBody.css';

export default function PageBody(props) {
   let additionalClass = 'WithSidebar';
   return (
      <div className={`PageBody ${additionalClass}`}>

         {props.children}

      </div>
   )
}
