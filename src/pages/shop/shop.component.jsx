import React from 'react'
import { Route } from 'react-router-dom'
import {connect} from 'react-redux'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
//import { selectIsCollectionFetching , selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors'
// import { createStructuredSelector } from 'reselect'
//import CollectionsOverview from '../../components/collection-overview/collections-overview.component'
//import CollectionPage from '../collections/collection.component'
// import WithSpinner from '../../components/with-spinner/with-spinner.component'  

import CollectionsOverviewContainer from '../../components/collection-overview/collections-overview.container'
import CollectionPageContainer from '../collections/collection.container'

//const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
// const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {  //match , location , history  route sends match object to the component
//    state={
//        loading:true
//    }
   
//     unsubscribeFromSnapshot = null;

   componentDidMount(){
    const {fetchCollectionsStart} = this.props
    fetchCollectionsStart()
//    const collectionRef = firestore.collection('collections')

//    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot=>{
//    const collectionsMap = convertCollectionSnapshotToMap(snapshot)
//    this.props.updateCollections(collectionsMap)
//    this.setState({loading:false})
//    })

    // collectionRef.get().then(snapshot=>{
    // const collectionsMap = convertCollectionSnapshotToMap(snapshot)
    // this.props.updateCollections(collectionsMap)
    // this.setState({loading:false})
    // })  

    // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-4ccb9/databases/(default)/documents/collections').
    // then(response=> response.json()).
    // then(collections=> console.log('COLLECTION ',collections))

    }

    render(){
    return <div className='shop-PAGE'>
        {/* <Route exact path={`${this.props.match.path}`} component={CollectionsOverview}/>
        <Route path={`${this.props.match.path}/:collectionId`} component={CollectionPage}/> 
        <Route exact path={`${this.props.match.path}`} render={(props)=><CollectionsOverviewWithSpinner isLoading={this.props.isCollectionFetching} {...props}/>}/>
        <Route path={`${this.props.match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading={!this.props.isCollectionsLoaded} {...props}/>}/> */}
        <Route exact path={`${this.props.match.path}`} component={CollectionsOverviewContainer}/>
        <Route path={`${this.props.match.path}/:collectionId`} component={CollectionPageContainer}/>
        </div>     
    }
}   

// const mapStateToProps = createStructuredSelector({
//     isCollectionFetching: selectIsCollectionFetching,
//     isCollectionsLoaded: selectIsCollectionsLoaded
// })

const mapDispatchToProps = (dispatch)=>({
    fetchCollectionsStart: ()=> dispatch(fetchCollectionsStart())
})

// const mapDispatchToProps = (dispatch)=>({
// updateCollections: (collectionsMap)=> dispatch(updateCollections(collectionsMap))
// }
// )
export default connect(null , mapDispatchToProps)(ShopPage)