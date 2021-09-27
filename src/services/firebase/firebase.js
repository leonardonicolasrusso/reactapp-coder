import * as firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBWsmFK0XiQsg9YtrGsmP4-VIEVm7WFn5I",
    authDomain: "mi-aplicacion-6511f.firebaseapp.com",
    projectId: "mi-aplicacion-6511f",
    storageBucket: "mi-aplicacion-6511f.appspot.com",
    messagingSenderId: "107062922167",
    appId: "1:107062922167:web:f897f11b1cbbd255a07632"
}

const app = firebase.initializeApp(firebaseConfig)

export const getFirebase = () => {
    return app
}

export const db = getFirestore(app)

