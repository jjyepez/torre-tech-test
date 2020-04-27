import React from 'react';

import Brand from './Brand';
import MainTitle from './MainTitle';
import LoginLink from './LoginLink';

import './css/MainMenu.css';

export default function MainMenu(props) {

   // default by now
   let imgSrc = `https://starrgate.s3.amazonaws.com:443/users/0f16ca55470f4531ee9eab4ccb0deaf900409093/profile_IQQtQuS.jpg`;
   let userName = `jjyepez`;

   return (
      <nav className="MainMenu navbar navbar-dark bg-dark fixed-top">

         <div className="container">

            <span className="MainMenu-NavBar navbar-brand mb-0">
               <div className='d-flex'>

                  <Brand />

                  <MainTitle />

                  <LoginLink
                     userName={userName}
                     imgSrc={imgSrc}
                  />

               </div>

            </span>

         </div>

      </nav>
   );
}