import React, { Component } from 'react';

import Sidebar from '../components/Sidebar';
import PageBody from '../components/PageBody';

import PeopleSearchForm from '../components/PeopleSearchForm';
import SearchResults from '../components/SearchResults';
import NavTabs from '../components/NavTabs';

let services = require('../services/peopleServices');

export default class People extends Component {
   state = {
      peopleData: []
   }

   updatePeopleData = (rawData) => {

      let newData = rawData.map(record => {

         return {
            fullName: record.name,
            userName: record.username,
            picture: record.picture,
            remoter: record.remoter,
            openTo: record.openTo,
            location: record.locationName,
            verified: record.verified,
            weight: record.weight,
            additionalDetails: {
               compensations: record.compensations,
               skills: record.skills
            }
         }

      });

      this.setState({
         peopleData: newData
      })
   }

   componentDidMount = () => {
      services.loadFirstTime(this.updatePeopleData);
   }

   render() {
      return (
         <>
            <Sidebar>
               <PeopleSearchForm />
            </Sidebar>

            <PageBody>
               <NavTabs />
               <SearchResults
                  data={this.state.peopleData}
               />
            </PageBody>
         </>
      )
   }
}
