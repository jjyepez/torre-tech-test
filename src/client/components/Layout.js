import React from 'react';

import MainMenu from './MainMenu';
import MainContent from './MainContent';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import People from '../pages/People';
import Jobs from '../pages/Jobs';
import Error404 from '../pages/Error404';

import {
   Switch,
   Route,
   withRouter
} from 'react-router-dom';

function Layout(props) {
   return (
      <>
         <MainMenu />

         <MainContent>

            <Switch>

               <Route path="/" component={Home} />
               <Route path="/login" component={Login} />
               <Route path="/profile" component={Profile} />
               <Route path="/people" component={People} />
               <Route path="/jobs" component={Jobs} />
               <Route component={Error404} />

            </Switch>

         </MainContent>
      </>
   );
}

export default withRouter(props => <Layout {...props} />);