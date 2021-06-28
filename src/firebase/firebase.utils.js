import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBo1OQoTPuBNQN1UCJvGbGKbOHDJVa6Fto",
    authDomain: "crwn-db-4ccb9.firebaseapp.com",
    projectId: "crwn-db-4ccb9",
    storageBucket: "crwn-db-4ccb9.appspot.com",
    messagingSenderId: "89468745566",
    appId: "1:89468745566:web:7bbdc55615b24bc8dd01cf",
    measurementId: "G-Q8H2FF54ST"
  };

export const createUserProfileDocument = async(userAuth , additionalData)=>{
if(!userAuth)
return;

const userRef = firestore.doc(`users/${userAuth.uid}`)
const snapShot = await userRef.get()
//console.log(snapShot)
if(!snapShot.exists){
const { displayName , email } = userAuth
const createdAt = new Date()
try{
userRef.set({
  displayName,
  email,
  createdAt,
  ...additionalData
})
}catch(e){
  console.log('error creating user ',e.message)
}
}
return userRef;
}

export const addCollectionAndDocuments = async (collectionKey , objectsToAdd)=>{
const collectionRef = firestore.collection(collectionKey)
console.log("collectionRef ",collectionRef)
const batch = firestore.batch()
objectsToAdd.forEach(obj => {
  const newDocRef = collectionRef.doc()
  console.log(newDocRef)
  batch.set(newDocRef,obj)
});

return await batch.commit()
}

export const convertCollectionSnapshotToMap = (collectionsSnapshot)=>{
const transformedCollections = collectionsSnapshot.docs.map(doc => {
  const {title , items} = doc.data()
  return {
    routeName: encodeURI(title.toLowerCase()),
    id: doc.id,
    title,
    items
  }
})

console.log(transformedCollections)
return transformedCollections.reduce((accumulator,collection)=>{ accumulator[collection.title.toLowerCase()]=collection 
return accumulator
}, {} )
}

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;