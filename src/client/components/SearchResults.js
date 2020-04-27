import React, { Component, Suspense } from 'react';

import Card from './Card';
import Avatar from './Avatar';
import Pagination from './Pagination'

import './css/SearchResults.css';

export default class SearchResults extends Component {

   renderLoader = () => {
      return (
         <div className="label-warning">CARGANDO</div>
      )
   }

   render() {
      return (
         <Suspense fallback={this.renderLoader}>

            <div className="SearchResults">
               {
                  this.props.data.map((item, i) => {
                     let cardData = item;
                     return (
                        <Card
                           key={i}
                           data={cardData}
                        >
                           <div className="row">
                              <div className="col-6">
                                 {cardData.fullName}
                              </div>
                              <div className="col">
                                 <Avatar
                                    imgSrc={cardData.picture}
                                 />
                              </div>
                           </div>
                        </Card>
                     )
                  })
               }
            </div>

            <Pagination />

         </Suspense >
      )
   }
}
