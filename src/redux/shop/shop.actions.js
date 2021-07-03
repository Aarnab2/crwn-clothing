import ShopActionTypes from './shop.types'
import { firestore , convertCollectionSnapshotToMap} from '../../firebase/firebase.utils'

// export const updateCollections = (collectionsMap)=>({
// type: ShopActionTypes.UPDATE_COLLECTIONS,
// payload: collectionsMap
// })

export const fetchCollectionsStart = ()=>({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = (collectionsMap)=>({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionsMap
})

export const fetchCollectionsFaliure = (errorMessage)=>({
    type: ShopActionTypes.fetchCollectionsError,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = ()=>{ // istead of sending an action object here we send a function
   return dispatch => {
        const collectionRef = firestore.collection('collections')
        dispatch(fetchCollectionsStart())
        collectionRef.get().then(snapshot=>{
        const collectionsMap = convertCollectionSnapshotToMap(snapshot)
        dispatch(fetchCollectionsSuccess(collectionsMap))
        }).catch(error => dispatch(fetchCollectionsFaliure(error.message)))
   } 
}     

