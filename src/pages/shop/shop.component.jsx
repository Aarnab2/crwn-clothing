import React from 'react'
import CollectionsOverview from '../../components/collection-overview/collections-overview.component'
import { Route } from 'react-router-dom'
import CollectionPage from '../collections/collection.component'

const ShopPage = ({match}) => (  //match , location , history  route sends match object to the component
    <div className='shop-PAGE'>
    <Route exact path={`${match.path}`} component={CollectionsOverview}/>
    <Route path={`${match.path}/:collectionId`} component={CollectionPage}/> 
    </div>
    )    


export default ShopPage