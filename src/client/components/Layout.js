import React, { useState } from 'react';

import MainMenu from './MainMenu';
import MainContent from './MainContent';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Opportunity from '../pages/Opportunity';
import People from '../pages/People';
import Jobs from '../pages/Jobs';
import Error404 from '../pages/Error404';

import {
   Switch,
   Route,
   withRouter,
   Link
} from 'react-router-dom';

function Layout(props) {
   let [state, updateState] = useState({});
   return (
      <>
         <MainMenu />

         <MainContent>

            <Switch>

               <Route path="/" exact component={Home} />
               <Route path="/login" exact component={Login} />
               <Route path="/profile" component={Profile} />
               <Route path="/opportunity" component={Opportunity} />
               <Route path="/people" exact component={People} />
               <Route path="/jobs" exact component={Jobs} />
               <Route component={Error404} />

            </Switch>

         </MainContent>
      </>
   );
}

export default withRouter(props => <Layout {...props} />);