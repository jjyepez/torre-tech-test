import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './Layout';

export default function App(props) {
   return (
      <Router>
         <Layout />
      </Router>
   );
}