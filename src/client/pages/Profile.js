import React, { Component, Suspense } from 'react';
import queryString from 'query-string';

import ProfileDetails from '../components/ProfileDetails';
import NavTabs from '../components/NavTabs';

import './css/Profile.css';

let services = require('../services/profileServices');

export default class Profile extends Component {
   state = {
      profileInfo: {}
   }

   componentDidMount() {
      let values = queryString.parse(this.props.location.search);
      let username = values.username;

      services.loadProfileByUsername(username, this.updateProfileInfo);
   }

   updateProfileInfo = (profileData) => {
      this.setState({
         profileInfo: profileData
      })
   }

   render() {

      return (
         <Suspense fallback={<div>CARGANDO</div>}>
            <NavTabs />
            <div className='Profile mt-4 text-center'>

               <ProfileDetails
                  data={this.state.profileInfo || {}}
               />

            </div>

         </Suspense>
      )
   }

}
