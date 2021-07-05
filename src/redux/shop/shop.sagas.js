import { takeLatest , call , put , all} from "@redux-saga/core/effects";
import ShopActionTypes from "./shop.types";
import { convertCollectionSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import { fetchCollectionsSuccess , fetchCollectionsFaliure } from "./shop.actions";

export function* fetchCollectionsAsync(){ // takeEvery , call and put are saga-effects  put is used to create actions like dispatch
try{
    const collectionRef = firestore.collection('collections')
    yield console.log("i am fired ")
    const snapshot = yield collectionRef.get()
    const collectionsMap = yield call(convertCollectionSnapshotToMap , snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap))
}catch(e){
    yield put(fetchCollectionsFaliure(e.message))
}

// collectionRef.get().then(snapshot=>{
// const collectionsMap = convertCollectionSnapshotToMap(snapshot)
// dispatch(fetchCollectionsSuccess(collectionsMap))
// }).catch(error => dispatch(fetchCollectionsFaliure(error.message)))
}

export function* fetchCollectionsStart(){
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START , fetchCollectionsAsync)
}  

export function* shopSagas(){
    yield all([call(fetchCollectionsStart)])
}