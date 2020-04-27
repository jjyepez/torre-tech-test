import React from 'react';

export default function JobsSearchForm(props) {
   return (
      <form className="form">
         <div className="mb-2">Filtro</div>
         <fieldset>
            <input className="form-control" />
         </fieldset>

         <button className="btn btn-secondary btn-block mt-3">BUSCAR</button>
      </form>
   )
}
