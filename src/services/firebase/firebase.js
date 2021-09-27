import * as firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
}

const app = firebase.initializeApp(firebaseConfig)

export const getFirebase = () => {
    return app
}

export const db = getFirestore(app)

