import React from 'react';

import Brand from './Brand';
import LoginLink from './LoginLink';

import './css/MainMenu.css';

export default function MainMenu(props) {
   return (
      <nav className="MainMenu navbar navbar-dark bg-dark">
         <div className="container">
            <span className="MainMenu-NavBar navbar-brand mb-0 h1">
               <div className='d-flex'>

                  <Brand />

                  <div className='MainMenu-CenterTitle'>&nbsp;</div>

                  <LoginLink />

               </div>
            </span>
         </div>
      </nav>
   );
}