import React from 'react';

import MainMenu from './MainMenu';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import People from '../pages/People';
import Jobs from '../pages/Jobs';

import {
   Switch,
   withRouter
} from 'react-router-dom';

function Layout(props) {
   return (
      <>
         <MainMenu />

         <Switch>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/people" component={People} />
            <Route path="/jobs" component={Jobs} />
         </Switch>
      </>
   );
}

export default withRouter(props => <Layout {...props} />);