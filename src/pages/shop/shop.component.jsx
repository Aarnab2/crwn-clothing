import React from 'react'
import CollectionsOverview from '../../components/collection-overview/collections-overview.component'
import { Route } from 'react-router-dom'
import CollectionPage from '../collections/collection.component'
import {firestore , convertCollectionSnapshotToMap} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component'  

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {  //match , location , history  route sends match object to the component
   state={
       loading:true
   }
   
    unsubscribeFromSnapshot = null;

   componentDidMount(){
   const collectionRef = firestore.collection('collections')

//    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot=>{
//    const collectionsMap = convertCollectionSnapshotToMap(snapshot)
//    this.props.updateCollections(collectionsMap)
//    this.setState({loading:false})
//    })

    collectionRef.get().then(snapshot=>{
    const collectionsMap = convertCollectionSnapshotToMap(snapshot)
    this.props.updateCollections(collectionsMap)
    this.setState({loading:false})
    })  

    // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-4ccb9/databases/(default)/documents/collections').
    // then(response=> response.json()).
    // then(collections=> console.log('COLLECTION ',collections))

    }

    render(){
    return <div className='shop-PAGE'>
        {/* <Route exact path={`${this.props.match.path}`} component={CollectionsOverview}/>
        <Route path={`${this.props.match.path}/:collectionId`} component={CollectionPage}/>  */}
        <Route exact path={`${this.props.match.path}`} render={(props)=><CollectionsOverviewWithSpinner isLoading={this.state.loading} {...props}/>}/>
        <Route path={`${this.props.match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading={this.state.loading} {...props}/>}/>
        </div>     
    }
}   

const mapDispatchToProps = (dispatch)=>({
updateCollections: (collectionsMap)=> dispatch(updateCollections(collectionsMap))
}
)
export default connect(null,mapDispatchToProps)(ShopPage)