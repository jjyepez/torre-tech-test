import React from 'react';

import MainMenu from './MainMenu';
import MainContent from './MainContent';

export default function Layout(props) {
   return (
      <>
         <MainMenu />
         <MainContent />
      </>
   );
}