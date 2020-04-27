import React from 'react';

import Avatar from './Avatar';
import Card from './Card';
import Loader from './Loader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons'

import './css/OpportunityDetails.css';

export default function OpportunityDetails({ data = {} } = {}) {

   if (!data || Object.keys(data).length == 0) {
      return <Loader />;
   }

   let coverImgSrc = null;
   if (
      data.attachments.length > 0
      && data.attachments[0].resource === 'cover') {

      coverImgSrc = data.attachments[0].address;
   }

   let commitmentDesc = {
      "full-time": "Timepo completo",
      "part-time": "Tiempo parcial"
   }[data.commitment.code];

   let compensationDesc = 33;
   if (data.compensation) {
      compensationDesc = data.compensation.currency;
      if (data.compensation.minAmount < 1000000) {
         compensationDesc += ' ' + ~~(data.compensation.minAmount / 1000) + 'k';
      } else {
         compensationDesc += ' ' + (~~(data.compensation.minAmount / 100000) / 10) + 'M'
      }
      if (
         data.compensation.maxAmount
         && data.compensation.minAmount !== data.compensation.maxAmount
      ) {
         if (data.compensation.maxAmount < 1000000) {
            compensationDesc += ' - ' + ~~(data.compensation.maxAmount / 1000) + 'k';
         } else {
            compensationDesc += ' - ' + (~~(data.compensation.maxAmount / 100000) / 10) + 'M'
         }
      }
      compensationDesc = <div style={{ color: '#CDDC39' }}>{compensationDesc}</div>
   }

   return (

      <div className="OpportunityDetails">

         <Avatar
            width={145}
            height={150}
            imgSrc={data.organizations[0].picture}
         />

         {coverImgSrc && (
            <div
               className='OpportunityDetails-Cover'
               style={{
                  backgroundImage: `url(${coverImgSrc})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  width: '100%',
                  height: '350px'
               }}></div>
         )}

         {(
            data.place
            && data.place.location
            && data.place.location.length > 0
         ) ? (
               <Card>
                  <h3>{data.objective}</h3>
                  <h4>
                     <FontAwesomeIcon className="mr-3" icon={faMapMarkerAlt} />
                     {data.place.location[0].id}
                     <div className='mt-2 h5 text-muted'>{commitmentDesc}</div>
                     <div className='mt-2 h3 text-muted'>{compensationDesc}</div>
                  </h4>
               </Card>
            ) : (
               <div style={{ zIndex: -1, marginTop: '14rem', position: 'relative' }}>
                  <Card>
                     <h3>{data.objective}</h3>
                     <div className='mt-2 h5 text-muted'>{commitmentDesc}</div>
                     <div className='mt-2 h3 text-muted'>{compensationDesc}</div>
                  </Card>
               </div>
            )
         }

         <div className='mb-5 pb-2' style={{ marginTop: '5rem', display: 'flex', flexDirection: 'column' }}>

            <div className='h4 ml-3 text-left'>Fortalezas requeridas</div>

            <div className='mb-4'>
               <div className='m-2'>
                  {data.strengths.map((item, i) => {
                     return (
                        <div className='h5 m-1 text-muted' style={{ float: 'left' }} key={i}>
                           <span className='badge badge-pill badge-secondary text-muted'>{item.name}</span>
                        </div>
                     )
                  })}
               </div>
            </div>

            <div className='h4 mb-3 ml-3 text-left'>Detalles</div>

            <div className='mb-4 text-left'>
               <div className="OpportunityDetails-Grid">
                  {data.details.map((item, i) => {

                     let detailsTitle = item.code.replace('-', ' ');

                     return (
                        <div className="ml-3" key={i}>
                           <h4 className="text-capitalize">{detailsTitle}</h4>
                           <div dangerouslySetInnerHTML={{ "__html": item.content }} />
                        </div>
                     )
                  })}
               </div>
            </div>

         </div>

      </div >

   )
}
