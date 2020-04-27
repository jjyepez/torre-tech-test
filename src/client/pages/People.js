import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../components/Sidebar';
import PageBody from '../components/PageBody';

import PeopleSearchForm from '../components/PeopleSearchForm';
import SearchResults from '../components/SearchResults';
import NavTabs from '../components/NavTabs';

import Avatar from '../components/Avatar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWeightHanging } from '@fortawesome/free-solid-svg-icons'

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
            headline: record.professionalHeadline,
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

   renderCardHandler = (cardData) => {

      // Weight description prep
      let roundedWeight = Math.round(cardData.weight);
      let weightDesc = roundedWeight > 1000 ? (roundedWeight / 1000).toFixed(1) + 'k' : ~~(cardData.weight);

      return (
         <>
            <div style={{ position: 'relative' }}>
               <div className="d-flex mb-2">
                  <div className='mr-3'>
                     <Link to={`/profile?user=${cardData.userName}`}>
                        <Avatar
                           imgSrc={cardData.picture}
                           verified={cardData.verified}
                        />
                     </Link>
                  </div>
                  <div>
                     <div>{cardData.fullName}</div>
                     <div style={{ color: '#CDDC39' }}>
                        <FontAwesomeIcon className="mr-2" icon={faWeightHanging} /> {weightDesc}
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <div className="text-muted" style={{ height: '2.75rem', overflow: 'hidden' }}>{cardData.headline}</div>
               <Link to={`/profile?username=${cardData.userName}`} className="btn btn-block btn-secondary mt-2">Ver Bio</Link>
            </div>
         </>
      )
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
                  renderCardHandler={this.renderCardHandler}
               />
            </PageBody>
         </>
      )
   }
}
