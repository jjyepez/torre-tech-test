import React from 'react';

import './css/HeroButton.css';

export default function HeroButton({ imgSrc, title }) {
   return (
      <div className="HeroButton">
         <img src={imgSrc} />
         <legend>{title}</legend>
      </div>
   )
}
