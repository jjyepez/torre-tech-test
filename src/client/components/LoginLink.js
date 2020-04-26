import React from 'react';

import { Link } from 'react-router-dom';

export default function LoginLink() {
   return (
      <>
         <Link to="/login" className='btn btn-outline-link btn-sm'>ACCEDER</Link>
      </>
   )
}