import React from 'react';

export default function NavTabs(props) {
   return (
      <nav className="nav nav-pills flex-column flex-sm-row">
         <a className="flex-sm-fill text-sm-center nav-link active" href="#">Active</a>
         <a className="flex-sm-fill text-sm-center nav-link" href="#">Longer nav link</a>
         <a className="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
         <a className="flex-sm-fill text-sm-center nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </nav>
   )
}
