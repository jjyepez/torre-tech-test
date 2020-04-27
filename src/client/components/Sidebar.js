import React from 'react';

import PeopleSearchForm from './PeopleSearchForm';

import './css/Sidebar.css';

export default function Sidebar(props) {
   return (
      <aside className="Sidebar">

         {props.children}

      </aside>
   )
}
