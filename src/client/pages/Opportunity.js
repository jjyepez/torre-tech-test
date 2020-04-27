import React, { Component, Suspense } from 'react';
import queryString from 'query-string';

import OpportunityDetails from '../components/OpportunityDetails';
import NavTabs from '../components/NavTabs';

import './css/Opportunity.css';

let services = require('../services/opportunityServices');

export default class Opportunity extends Component {
   state = {
      opportunityInfo: {}
   }

   componentDidMount() {
      let values = queryString.parse(this.props.location.search);
      let jobID = values.id;

      services.loadOpportunityByID(jobID, this.updateOpportunityInfo);
   }

   updateOpportunityInfo = (opportunityData) => {
      this.setState({
         opportunityInfo: opportunityData
      })
   }

   render() {

      return (
         <Suspense fallback={<div>CARGANDO</div>}>
            <NavTabs />
            <div className='Opportunity mt-4 text-center'>

               <OpportunityDetails
                  data={this.state.opportunityInfo || {}}
               />

            </div>

         </Suspense>
      )
   }

}
