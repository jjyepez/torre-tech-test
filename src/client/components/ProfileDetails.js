import React from 'react';

import Avatar from './Avatar';
import Card from './Card';
import Loader from './Loader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons'

import './css/ProfileDetails.css';

export default function ProfileDetails({ data = {} } = {}) {

   if (!data || Object.keys(data).length == 0) {
      return <Loader />;
   }

   // Weight description prep
   let weightDesc = null;
   if (data.person.weight > 0) {
      let roundedWeight = Math.round(data.person.weight);
      weightDesc = roundedWeight > 1000 ? (roundedWeight / 1000).toFixed(1) + 'k' : ~~(data.person.weight);
   }

   return (

      <div className="ProfileDetails">

         <div className="ProfileDetails-Header row">

            <div className="p-2 mb-3">
               <Avatar
                  width={145}
                  height={150}
                  imgSrc={data.person.pictureThumbnail}
               />
            </div>

            <div className="col text-left">

               <div className='h4'>{data.person.name}</div>
               <div className='h5'> @{data.person.publicId}</div>

               <div className='h5 text-muted'>
                  <FontAwesomeIcon className="mr-3" icon={faMapMarkerAlt} />
                  {data.person.location.name}
               </div>

            </div>

            {weightDesc && (
               <div className="col text-center">
                  <h2 style={{ color: '#CDDC39' }}>
                     <FontAwesomeIcon className="mr-2" icon={faWeightHanging} /> {weightDesc}
                  </h2>
                  <div className='text-muted'>Peso de recomendación total</div>
               </div>
            )}

            <div className="col">
               <Card>
                  <div className='ProfileDetails-StatsCard text-center'>

                     {data.stats.strengths && (
                        <div>
                           <div className="h3">{data.stats.strengths}</div>
                           <label>Fortalezas</label>
                        </div>
                     )}

                     {data.stats.education && (
                        <div>
                           <div className="h3">{data.stats.education}</div>
                           <label>Educación</label>
                        </div>
                     )}

                     {data.stats.interests && (
                        <div>
                           <div className="h3">{data.stats.interests}</div>
                           <label>Intereses</label>
                        </div>
                     )}

                     {data.stats.jobs && (
                        <div>
                           <div className="h3">{data.stats.jobs}</div>
                           <label>Trabajos</label>
                        </div>
                     )}

                     {data.stats.projects && (
                        <div>
                           <div className="h3">{data.stats.projects}</div>
                           <label>Proyectos</label>
                        </div>
                     )}

                  </div>
               </Card>
            </div>

         </div>

         <Card>
            <div className='text-muted'>{data.person.professionalHeadline}</div>
         </Card>

         <div className='mt-4 mb-5' style={{ display: 'flex', flexDirection: 'column' }}>

            <div className='h4 ml-3 text-left'>Fortalezas</div>

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

            <div className='h4 ml-3 text-left'>Educación</div>

            <div className='mb-4'>
               <div className='m-2'>
                  {data.education.map((item, i) => {
                     return (
                        <div className='h5 m-1' style={{ float: 'left' }} key={i}>
                           <span className='badge badge-pill badge-secondary text-muted'>{item.name}</span>
                        </div>
                     )
                  })}
               </div>
            </div>

            <div className='h4 ml-3 text-left'>Intereses</div>

            <div className='mb-4'>
               <div className='m-2'>
                  {data.interests.map((item, i) => {
                     return (
                        <div className='h5 m-1' style={{ float: 'left' }} key={i}>
                           <span className='badge badge-pill badge-secondary text-muted'>{item.name}</span>
                        </div>
                     )
                  })}
               </div>
            </div>

            <div className='h4 ml-3 text-left'>Trabajos</div>

            <div className='mb-4'>
               <div className='ProfileDetails-Section m-2'>
                  {data.jobs.map((item, i) => {
                     return (
                        <Card key={i}>
                           <div>
                              {item.name}
                           </div>
                           <div className='text-muted'>
                              {item.organizations[0].name}
                           </div>
                           <div>
                              {item.fromYear} - {item.toYear}
                           </div>
                        </Card>
                     )
                  })}
               </div>
            </div>

            <div className='h4 ml-3 text-left'>Proyectos</div>

            <div className='mb-4'>
               <div className='ProfileDetails-Section m-2'>
                  {data.projects.map((item, i) => {
                     return (
                        <Card key={i}>
                           <div>
                              {item.name}
                           </div>
                           <div className='text-muted'>
                              {item.organizations && item.organizations.length > 0 && item.organizations[0].name}
                           </div>
                           <div>
                              {item.fromYear} - {item.toYear}
                           </div>
                        </Card>
                     )
                  })}
               </div>
            </div>

         </div>

      </div>

   )
}
