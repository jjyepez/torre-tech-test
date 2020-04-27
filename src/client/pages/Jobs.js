import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../components/Sidebar';
import PageBody from '../components/PageBody';

import JobsSearchForm from '../components/JobsSearchForm';
import SearchResults from '../components/SearchResults';
import NavTabs from '../components/NavTabs';

import Avatar from '../components/Avatar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

let services = require('../services/jobsServices');

export default class Jobs extends Component {
   state = {
      jobsData: []
   }

   updateJobsData = (rawData) => {

      let newData = rawData.map(record => {

         return {
            organizations: record.organizations,
            type: record.type,
            objective: record.objective,
            locations: record.locations,
            compensation: record.compensation,
            deadline: record.deadline,
            id: record.id,
            remote: record.remote
         }

      });

      this.setState({
         jobsData: newData
      })
   }

   renderCardHandler = (cardData) => {
      let compensationDesc = '';

      // Compensation description prep
      if (cardData.compensation && cardData.compensation.data) {
         compensationDesc = cardData.compensation.data.currency;
         if (cardData.compensation.data.minAmount < 1000000) {
            compensationDesc += ' ' + ~~(cardData.compensation.data.minAmount / 1000) + 'k';
         } else {
            compensationDesc += ' ' + (~~(cardData.compensation.data.minAmount / 100000) / 10) + 'M'
         }
         if (
            cardData.compensation.data.maxAmount
            && cardData.compensation.data.minAmount !== cardData.compensation.data.maxAmount
         ) {
            if (cardData.compensation.data.maxAmount < 1000000) {
               compensationDesc += ' - ' + ~~(cardData.compensation.data.maxAmount / 1000) + 'k';
            } else {
               compensationDesc += ' - ' + (~~(cardData.compensation.data.maxAmount / 100000) / 10) + 'M'
            }
         }
         compensationDesc = <div style={{ color: '#CDDC39' }}>{compensationDesc}</div>
      }

      let typeDesc = {
         "full-time-employment": "Tiempo completo",
         "internships": "Pasantías"
      }[cardData.type] || '';

      return (
         <>
            <div style={{ position: 'relative' }}>
               <div className="d-flex mb-2">
                  <div className='mr-3'>
                     <Link to={`/opportunity?id=${cardData.id}`}>
                        <Avatar
                           imgSrc={cardData.organizations[0].picture}
                        />
                     </Link>
                  </div>
                  <div>
                     <div className="overflow-hidden" style={{ maxHeight: '2.75rem' }}>{cardData.objective}</div>
                     <div className="text-muted">{typeDesc}</div>

                     {compensationDesc !== '' && <div>{compensationDesc}</div>}

                  </div>
               </div>
            </div>
            <div>
               <div className="overflow-hidden" style={{ height: '1.3rem' }}>{cardData.organizations[0].name}</div>
               <div className="text-muted"><FontAwesomeIcon className="mr-2" icon={faMapMarkerAlt} />{cardData.locations[0]}</div>
               <Link to={`/opportunity?id=${cardData.id}`} className="btn btn-block btn-secondary mt-2">Ver Job</Link>
            </div>
         </>
      )
   }

   componentDidMount = () => {
      services.loadFirstTime(this.updateJobsData);
   }

   render() {
      return (
         <>
            <Sidebar>

               <JobsSearchForm />

            </Sidebar>

            <PageBody>

               <NavTabs />

               <SearchResults
                  data={this.state.jobsData}
                  renderCardHandler={this.renderCardHandler}
               />
            </PageBody>
         </>
      )
   }
}
