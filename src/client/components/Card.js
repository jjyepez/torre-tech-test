import React from 'react';

import './css/Card.css';

export default function Card(props) {
   let { i } = props;
   return (
      <div className="Card" key={i}>
         {props.children}
      </div>
   )
}
