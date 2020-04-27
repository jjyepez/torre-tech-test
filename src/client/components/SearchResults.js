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
                  this.props.data.map((cardData, i) => {
                     return (
                        <Card
                           key={i}
                           data={cardData}
                        >
                           {this.props.renderCardHandler(cardData)}
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
