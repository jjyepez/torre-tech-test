import React from 'react';

import Avatar from './Avatar';
import { Link } from 'react-router-dom';

export default function LoginLink({ imgSrc, userName }) {

   return (
      <Link to={`/profile?username=${userName}`}>
         <Avatar
            width={30}
            height={32}
            imgSrc={imgSrc}
         />
      </Link>
   )
}