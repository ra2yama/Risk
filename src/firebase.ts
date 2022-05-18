import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCKKmcMKF1UKD3Ib9qHUuAUMlnmxDe5clE",
    authDomain: "risk-ec844.firebaseapp.com",
    projectId: "risk-ec844",
    storageBucket: "risk-ec844.appspot.com",
    messagingSenderId: "597512603171",
    appId: "1:597512603171:web:bb84a92c5afc2baf2f1396",
    measurementId: "G-ZQJYT8M3N2"
}

export const initFirebase = () => {
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)

    return { auth }
}