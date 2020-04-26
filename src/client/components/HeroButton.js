import React from 'react';
import { Link } from 'react-router-dom';

import './css/HeroButton.css';

export default function HeroButton({ imgSrc, href, title }) {
   return (
      <div className="HeroButton text-center">

         <Link to={href}>

            <img width='100%' src={imgSrc} />
            <legend>{title}</legend>

         </Link>

      </div>
   )
}
