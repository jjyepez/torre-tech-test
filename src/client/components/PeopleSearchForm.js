import React from 'react';

export default function PeopleSearchForm(props) {
   return (
      <form className="form">
         <legend>Filtro</legend>
         <fieldset>
            <input className="form-control" />
         </fieldset>

         <button className="btn btn-primary btn-sm mt-2">BUSCAR</button>
      </form>
   )
}
