import React from 'react';

import './css/Home.css';
import HeroButton from '../components/HeroButton';

export default function Home(props) {
   return (
      <div className="Home">

         <div className="row mt-5 mb-5">
            <div className="Home-Slogan col-12 text-center">
               Únete a la red profesional de siguiente generación
            </div>
         </div>

         <div className="row">
            <div className="col-6 text-center">
               <HeroButton
                  href='/people'
                  imgSrc='/img/people_hero.png'
                  title='PERSONAS'
               />
            </div>

            <div className="col-6 text-center">
               <HeroButton
                  href='/jobs'
                  imgSrc='/img/jobs_hero.png'
                  title='JOBS'
               />
            </div>
         </div>

         <div className="row mt-5 mb-5">
            <div className="small text-muted col-12 text-center">
               Las imágenes son propiedad de sus respectivos creadores.<br />Tomadas de dribbble.com
            </div>
         </div>
      </div>
   )
}
