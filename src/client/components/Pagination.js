import React from 'react';

import './css/Pagination.css';

export default function (props) {
   return (
      <nav className='Pagination'>
         <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#">&laquo;</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">&raquo;</a></li>
         </ul>
      </nav>
   )
}
